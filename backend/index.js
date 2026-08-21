// Minimal Express backend with a very small regex-based "parser" for prototyping.
const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config();

const DB_PATH = process.env.DB_PATH || path.join(__dirname, '..', 'data', 'chatmoney.db');
const PORT = process.env.PORT || 3001;

// Ensure data dir exists
const fs = require('fs');
const dataDir = path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console.error('Failed to open DB', err);
    process.exit(1);
  }
});

// Create table if missing
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS transactions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT DEFAULT 'local',
      amount REAL NOT NULL,
      category TEXT,
      original_text TEXT,
      created_at DATETIME DEFAULT (datetime('now'))
    );
  `);
});

const app = express();
app.use(cors());
app.use(express.json());

// Very small mapping for keywords -> category
const CATEGORY_KEYWORDS = [
  { keywords: ['mercado', 'supermercado', 'compras'], category: 'alimentação' },
  { keywords: ['ônibus', 'uber', 'taxi', 'táxi', 'transporte'], category: 'transporte' },
  { keywords: ['cinema', 'show', 'lazer'], category: 'lazer' },
  { keywords: ['aluguel', 'rent'], category: 'moradia' },
  { keywords: ['salário', 'salario', 'recebi', 'receita'], category: 'renda' }
];

function detectAmount(text) {
  // Find first occurrence of a number like 50, 50.00 or 50,00
  const match = text.match(/([0-9]+(?:[.,][0-9]{1,2})?)/);
  if (!match) return null;
  // normalize comma to dot
  const raw = match[1].replace(',', '.');
  const value = parseFloat(raw);
  return Number.isFinite(value) ? value : null;
}

function detectCategory(text) {
  const lower = text.toLowerCase();
  for (const entry of CATEGORY_KEYWORDS) {
    for (const k of entry.keywords) {
      if (lower.includes(k)) return entry.category;
    }
  }
  // fallback: try simple heuristics
  if (lower.includes('pagar') || lower.includes('gastei') || lower.includes('comprei')) return 'despesa';
  if (lower.includes('recebi') || lower.includes('ganhei') || lower.includes('salário') || lower.includes('salario')) return 'renda';
  return 'outros';
}

app.post('/chat', (req, res) => {
  const text = (req.body && req.body.text) ? String(req.body.text) : '';
  if (!text) return res.status(400).json({ error: 'text is required' });

  const amount = detectAmount(text);
  const category = detectCategory(text);

  if (amount === null) {
    return res.status(400).json({ error: 'no amount detected', parsed: { amount, category } });
  }

  const stmt = db.prepare(`INSERT INTO transactions (user_id, amount, category, original_text) VALUES (?, ?, ?, ?)`);
  stmt.run('local', amount, category, text, function(err) {
    if (err) return res.status(500).json({ error: 'db error', details: String(err) });
    const insertedId = this.lastID;
    db.get('SELECT * FROM transactions WHERE id = ?', [insertedId], (err2, row) => {
      if (err2) return res.status(500).json({ error: 'db error', details: String(err2) });
      res.json({ ok: true, transaction: row });
    });
  });
});

app.get('/transactions', (req, res) => {
  db.all('SELECT * FROM transactions ORDER BY created_at DESC LIMIT 100', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'db error', details: String(err) });
    res.json({ transactions: rows });
  });
});

app.listen(PORT, () => {
  console.log(`ChatMoney backend (scaffold) listening on http://localhost:${PORT}`);
});
