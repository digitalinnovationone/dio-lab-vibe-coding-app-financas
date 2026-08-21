import { useEffect, useState } from 'react'

const BACKEND = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001'

export default function Home() {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchTransactions()
  }, [])

  async function fetchTransactions() {
    try {
      const res = await fetch(`${BACKEND}/transactions`)
      const data = await res.json()
      setTransactions(data.transactions || [])
    } catch (err) {
      console.error(err)
    }
  }

  async function send() {
    if (!text.trim()) return
    const userText = text.trim()
    setMessages(prev => [...prev, { from: 'user', text: userText }])
    setText('')
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${BACKEND}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: userText })
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Erro ao processar')
        setMessages(prev => [...prev, { from: 'bot', text: `Erro: ${data.error || 'não identificado'}` }])
      } else {
        const tx = data.transaction
        const botText = tx ? `Registrado: R$ ${tx.amount} — categoria: ${tx.category}` : (data.message || 'Ok')
        setMessages(prev => [...prev, { from: 'bot', text: botText }])
        await fetchTransactions()
      }
    } catch (err) {
      console.error(err)
      setError(String(err))
      setMessages(prev => [...prev, { from: 'bot', text: `Erro de conexão: ${String(err)}` }])
    } finally {
      setLoading(false)
    }
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <h1>ChatMoney — Piá (Prototype)</h1>
      <p>Digite uma mensagem para registrar uma transação. Ex.: "gastei 50 reais no mercado"</p>

      <div style={{ display: 'flex', gap: 20 }}>
        <div style={{ flex: 1, border: '1px solid #ddd', padding: 12, borderRadius: 6 }}>
          <div style={{ minHeight: 300, maxHeight: 500, overflowY: 'auto', padding: 8, background: '#fafafa' }}>
            {messages.length === 0 && <div style={{ color: '#666' }}>Nenhuma mensagem ainda.</div>}
            {messages.map((m, i) => (
              <div key={i} style={{ margin: '8px 0' }}>
                <strong style={{ color: m.from === 'user' ? '#0b63ff' : '#0b8a3e' }}>{m.from === 'user' ? 'Você' : 'Piá'}</strong>
                <div style={{ marginTop: 4 }}>{m.text}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 8 }}>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              onKeyDown={handleKey}
              rows={3}
              aria-label="Mensagem para Piá"
              style={{ width: '100%', padding: 8, borderRadius: 4 }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
              <div>{loading ? 'Enviando...' : ''}</div>
              <div>
                <button onClick={send} disabled={loading} style={{ padding: '8px 12px' }}>
                  Enviar
                </button>
              </div>
            </div>
            {error && <div style={{ color: 'crimson', marginTop: 8 }}>{error}</div>}
          </div>
        </div>

        <div style={{ width: 360 }}>
          <h3>Extrato (últimas 100)</h3>
          <div style={{ border: '1px solid #eee', padding: 8, borderRadius: 6, maxHeight: 500, overflowY: 'auto', background: '#fff' }}>
            {transactions.length === 0 && <div style={{ color: '#666' }}>Sem transações</div>}
            {transactions.map(tx => (
              <div key={tx.id} style={{ padding: 8, borderBottom: '1px solid #f3f3f3' }}>
                <div><strong>R$ {Number(tx.amount).toFixed(2)}</strong> — {tx.category}</div>
                <div style={{ color: '#666', fontSize: 12 }}>{tx.original_text}</div>
                <div style={{ color: '#999', fontSize: 11 }}>{tx.created_at}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer style={{ marginTop: 20, color: '#888' }}>
        Protótipo: frontend conectado ao backend em {BACKEND}
      </footer>
    </div>
  )
}
