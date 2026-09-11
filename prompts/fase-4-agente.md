# Fase 4 — Agente Financeiro: metas e dicas de economia

> Avance somente quando o checklist da Fase 3 estiver completo.

## 📋 Prompt principal

```
Agora vou dar poder de consultor ao Agente Financeiro.

1. Metas: o usuário pode dizer "quero guardar 500 por mês" e o agente:
   - Confirma: "Meta de economia criada: R$ 500,00 por mês. Vamos lá!"
   - Mostra na tela um cartão de meta com o progresso mensal
2. Dicas: o agente analisa os gastos do mês e dá 1 dica personalizada,
   por exemplo: "Você gastou R$ 350 em Alimentação. Que tal levar marmita 2x por semana?"
3. Comemorações: se a meta foi alcançada, o agente elogia:
   "Você atingiu sua meta! Mandou bem 🎉"
4. Pergunta "como economizar?" → o agente responde com base na maior categoria de gasto.
```

## 🔧 Refinamentos (se precisar)

```
A dica está genérica. Ela deve sempre citar a maior categoria de gasto do mês.
```

```
O cartão de meta não aparece. Adicione um cartão destacado abaixo do saldo.
```

## ✅ Critério de aceite

- [ ] "quero guardar 500 por mês" cria a meta e confirma no chat
- [ ] Cartão de meta mostra o progresso
- [ ] As dicas citam a maior categoria de gasto
- [ ] O agente comemora quando a meta é atingida

## 💡 Dica

- **Lovable:** descreva o cartão de meta com detalhes visuais ("cartão colorido com barra de progresso").
