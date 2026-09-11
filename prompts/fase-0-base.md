# Fase 0 — Apresentar o app e criar a base

> Cole este prompt inteiro na ferramenta (Lovable ou Copilot) **após** colar o PRD.md.
> Avance para a Fase 1 somente quando todos os itens do checklist estiverem marcados.

## 📋 Prompt principal

```
Vou construir o app "Minhas Finanças", um controle de gastos por conversa.
Guarde estas informações:

- O usuário conversa com um "Agente Financeiro" em linguagem natural, por exemplo:
  "gastei 50 no mercado" ou "recebi 3500 de salário"
- Cada mensagem que o agente entende como transação cria um lançamento com:
  descrição, valor, tipo (receita ou despesa), data e categoria
- O app mostra saldo do mês, lista de transações, metas e relatórios
- Os dados ficam salvos no navegador mesmo ao recarregar a página
- Visual simples, limpo e moderno, tudo em português

Comece criando a tela principal com:
- Título "Minhas Finanças" no topo
- Cartão "Saldo do mês" (pode começar zerado)
- Uma área de conversa com a mensagem de boas-vindas do agente:
  "Olá! Eu sou seu assistente financeiro. Diga, por exemplo:
  'gastei 50 no mercado' e eu anoto para você."
- Campo de texto para digitar a mensagem e botão de enviar (verde, redondo, no canto)
```

## 🔧 Refinamentos (se precisar)

```
A tela ficou sem o cartão de saldo. Adicione um cartão branco de cantos arredondados logo abaixo do título.
```

```
Os textos estão em inglês. Traduza tudo para português.
```

## ✅ Critério de aceite

- [ ] A tela mostra o título "Minhas Finanças"
- [ ] O cartão de saldo aparece (zerado)
- [ ] A mensagem de boas-vindas do agente aparece
- [ ] Campo de texto + botão de enviar visíveis
- [ ] Tudo em português

## 💡 Dica

- **Lovable:** descreva os elementos de forma atômica ("cartão branco de cantos arredondados", "botão verde redondo").
- **Copilot:** rode o projeto com `npm run dev` e confira no navegador.
- Após aprovar a fase, salve o progresso (commit no Git ou snapshot no Lovable).
