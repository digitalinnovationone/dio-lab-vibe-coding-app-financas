# Fase 3 — Saldo e resumo do mês

> Avance somente quando o checklist da Fase 2 estiver completo.

## 📋 Prompt principal

```
Agora vou fazer o cartão de saldo calcular de verdade.

O cartão "Saldo do mês" deve mostrar:
- Saldo: receitas do mês atual menos despesas do mês atual
- Entradas: soma das receitas do mês (verde)
- Saídas: soma das despesas do mês (vermelho)

Regras:
- Só considerar transações do mês e ano atual
- Saldo positivo em verde, negativo em vermelho
- Formato brasileiro: R$ 1.234,56

Além disso, o agente deve responder no chat:
- "quanto gastei esse mês?" → "Você gastou R$ X neste mês."
- "qual meu saldo?" → mostra entradas, saídas e saldo
```

## 🔧 Refinamentos (se precisar)

```
O saldo está somando meses passados. Considere apenas o mês atual.
```

```
"quanto gastei esse mês?" não responde nada. Faça o agente responder com os valores.
```

## ✅ Critério de aceite

- [ ] Saldo = receitas − despesas do mês atual
- [ ] Entradas e saídas separadas no cartão
- [ ] Formato brasileiro nos valores
- [ ] O agente responde no chat sobre gastos e saldo

## 💡 Dica

- Teste com valores redondos: receita 1.000 e despesa 300 → saldo 700.
- **Copilot:** peça: *"explique em português como está calculando o saldo"* para conferir a lógica antes de seguir.
