# Fase 1 — Registrar gastos via conversa

> Avance somente quando o checklist da Fase 0 estiver completo.

## 📋 Prompt principal

```
Agora vou fazer a conversa registrar transações de verdade.

Quando o usuário enviar mensagens como:
- "gastei 50 no mercado" → despesa de R$ 50,00, descrição "Mercado"
- "recebi 3500 de salário" → receita de R$ 3.500,00, descrição "Salário"
- "paguei 900 de aluguel" → despesa de R$ 900,00, descrição "Aluguel"

O agente deve:
1. Entender o valor (aceite também "50 reais", "R$ 50", "cinquenta")
2. Entender se é receita ou despesa pelas palavras (gastei/paguei = despesa; recebi = receita)
3. Pedir confirmação antes de salvar quando estiver em dúvida:
   "Anotei: despesa de R$ 50,00 — Mercado. Confirmar?" com botões Confirmar e Editar
4. Após confirmar, responder de forma amigável:
   "Anotado! Despesa de R$ 50,00 registrada em Mercado."
5. Se não entender, responder: "Não entendi. Me diga o que foi, o valor e se é gasto ou ganho."

A transação confirmada deve aparecer na lista de transações abaixo do chat.
```

## 🔧 Refinamentos (se precisar)

```
Quando envio uma mensagem, nada acontece. Verifique se o botão de enviar está conectado ao chat.
```

```
Entendi "gastei 50" mas não "paguei 900". Considere também "comprei", "paguei" e "transferi" como despesa, e "ganhei" como receita.
```

## ✅ Critério de aceite

- [ ] "gastei 50 no mercado" registra despesa de R$ 50,00
- [ ] "recebi 3500 de salário" registra receita de R$ 3.500,00
- [ ] O agente pede confirmação quando tem dúvida
- [ ] A resposta de confirmação é amigável e em português
- [ ] A transação aparece na lista
- [ ] Mensagem não entendida recebe resposta educada

## 💡 Dica

- **Copilot:** se os valores saírem errados, peça: *"explique em português como você está extraindo o valor da mensagem"* para conferir a lógica.
