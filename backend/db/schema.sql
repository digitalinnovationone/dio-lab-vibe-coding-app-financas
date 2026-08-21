-- Schema for ChatMoney prototype (SQLite)

CREATE TABLE IF NOT EXISTS transactions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id TEXT DEFAULT 'local',
  amount REAL NOT NULL,
  category TEXT,
  original_text TEXT,
  created_at DATETIME DEFAULT (datetime('now'))
);
