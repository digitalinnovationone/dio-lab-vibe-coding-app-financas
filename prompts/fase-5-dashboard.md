# Fase 5 — Relatórios e gráficos (Dashboard)

> Avance somente quando o checklist da Fase 4 estiver completo.

## 📋 Prompt principal

```
Agora vou adicionar relatórios visuais.

Adicione uma barra com duas abas no topo: "Conversa" e "Dashboard".

O Dashboard deve mostrar:
1. Gráfico de rosca com despesas por categoria do mês
2. Legenda ao lado: categoria, valor e porcentagem (ex.: "Alimentação — R$ 350,00 — 45%")
3. Gráfico de barras com despesas dos últimos 6 meses
4. Cartão de destaque com a categoria campeã de gastos do mês
5. Sem despesas no mês, mostre "Nenhuma despesa neste mês"

Cores diferentes e bonitas por categoria, tudo em português.
```

## 🔧 Refinamentos (se precisar)

```
Os nomes das categorias saem cortados no gráfico. Mostre só a legenda do lado.
```

```
As abas não trocam de tela. Verifique se estão conectadas às telas certas.
```

## ✅ Critério de aceite

- [ ] As duas abas funcionam
- [ ] Rosca mostra despesas por categoria do mês
- [ ] Legenda com nome, valor e porcentagem
- [ ] Barras dos últimos 6 meses
- [ ] Categoria campeã destacada
- [ ] Mensagem amigável quando não há despesas

## 💡 Dica

- **Lovable:** peça "gráfico de rosca" (donut), que renderiza melhor em telas pequenas.
- **Copilot:** se o gráfico não aparecer, confira o console do navegador (F12) e cole o erro no chat.
