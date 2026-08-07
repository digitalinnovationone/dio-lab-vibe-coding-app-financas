# Fase 2 — Classificação automática e lista organizada

> Avance somente quando o checklist da Fase 1 estiver completo.

## 📋 Prompt principal

```
Agora vou deixar a classificação e a lista mais inteligentes.

1. Classifique automaticamente por categoria usando palavras-chave:
   mercado/supermercado/mercado → Alimentação
   aluguel/condomínio → Moradia
   uber/ônibus/gasolina → Transporte
   cinema/lazer → Lazer
   médico/farmácia → Saúde
   salário/freela → Salário (receita) ou Outros
   Qualquer outra → Outros

2. Ordene a lista da mais recente para a mais antiga, agrupada por dia
   (ex.: "12 de janeiro" como cabeçalho).

3. Cada item da lista mostra: descrição, categoria, valor e ícone de lixeira.
   Despesas em vermelho, receitas em verde.

4. A lixeira pergunta "Deseja excluir esta transação?" com Sim e Não.

5. Abaixo da lista, um resumo por categoria do mês atual
   (ex.: "Alimentação: R$ 350,00"), apenas categorias com lançamentos.
```

## 🔧 Refinamentos (se precisar)

```
O mercado foi classificado como Outros. Inclua "feira" e "compras do mês" como Alimentação.
```

```
Ao excluir, o resumo por categoria não atualiza. Ele deve atualizar na hora.
```

## ✅ Critério de aceite

- [ ] "gastei 50 no mercado" cai em Alimentação automaticamente
- [ ] Lista ordenada por data com cabeçalhos de dia em português
- [ ] Cores: despesa vermelha, receita verde
- [ ] Lixeira pede confirmação
- [ ] Resumo por categoria correto e atualizado

## 💡 Dica

- **Lovable:** diga onde cada bloco deve ficar: "o resumo por categoria fica em um cartão abaixo da lista".
- **Copilot:** peça um componente separado para o resumo, assim fica mais fácil ajustar depois.
