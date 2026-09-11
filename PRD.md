# PRD — Minhas Finanças (App de Organização de Finanças Pessoais)

> **Documento de Requisitos do Produto (PRD)** — este arquivo é o **contexto persistente** do projeto.
> Cole-o no primeiro prompt do Lovable ou mantenha-o aberto no Copilot para a IA entender sua vibe do início ao fim.

---

## Contexto

Quero criar um aplicativo de Organização de Finanças Pessoais que funcione por meio de conversas com o usuário. A ideia é facilitar o controle financeiro de forma simples e natural, sem formulários manuais ou planilhas complexas.

## Problema

Muitas pessoas desistem de controlar seus gastos porque os apps atuais exigem muita entrada manual e pouca personalização. Quero resolver isso com uma experiência de conversa e recomendações automáticas de economia.

## Público-Alvo

Pessoas que querem começar a organizar suas finanças de forma prática e sem complicação, principalmente iniciantes.

## Dores do Público

- Achar apps de finanças complicados e tediosos.
- Não saber por onde começar a se organizar.
- Desistir de controlar os gastos no primeiro mês.

## Funcionalidades-Chave

1. Registrar gastos via chat em linguagem natural (ex.: "gastei 50 no mercado").
2. Classificar automaticamente as transações por categoria.
3. Ver o saldo e o resumo do mês em uma conversa.
4. Definir e acompanhar metas financeiras.
5. Receber dicas de economia do "Agente Financeiro".
6. Visualizar relatórios simples e personalizados (gráficos).

## Regras de Negócio

- **Entendimento da conversa:** palavras como "gastei", "paguei", "comprei" indicam despesa; "recebi", "ganhei" indicam receita. O valor pode vir como "50", "50 reais", "R$ 50".
- **Classificação automática por categoria (palavras-chave):**
  - mercado, supermercado, feira, compras do mês → Alimentação
  - aluguel, condomínio → Moradia
  - uber, ônibus, gasolina → Transporte
  - cinema, lazer → Lazer
  - médico, farmácia → Saúde
  - salário, freela → Salário (receita) ou Outros
  - qualquer outra → Outros
- **Confirmação:** quando o agente tiver dúvida, pede confirmação antes de salvar.
- **Cálculo do mês:** saldo = receitas do mês atual − despesas do mês atual. Valores em formato brasileiro (R$ 1.234,56). Saldo positivo em verde, negativo em vermelho.
- **Meta:** "quero guardar X por mês" cria uma meta com progresso mensal; o agente comemora quando atingida.
- **Dicas:** o agente sempre cita a maior categoria de gasto do mês.
- **Persistência & Segurança:** dados salvos no navegador (localStorage), sanitização de inputs do chat contra XSS, validação de valores numéricos (> 0) e nada se perde ao recarregar a página.

## Telas do App

| Tela | Conteúdo |
|---|---|
| Conversa | Título "Minhas Finanças", cartão "Saldo do mês", chat com o Agente Financeiro, campo de texto e botão de enviar |
| Lista de transações | Abaixo do chat, agrupada por dia, com descrição, categoria, valor, lixeira e resumo por categoria |
| Metas | Cartão de meta com progresso mensal |
| Dashboard | Gráfico de rosca por categoria do mês, legenda com valores e porcentagens, barras dos últimos 6 meses, destaque da categoria campeã |

## Entregável da IA

Gerar um plano de MVP com as principais telas, recursos necessários e um esboço de validação inicial. Usar tom educativo e linguagem acessível, em português.

## Tom de Voz do Agente Financeiro

Amigável, didático, motivador, fala com iniciantes como um consultor pessoal. Exemplos:

- Confirmação: "Anotado! Despesa de R$ 50,00 registrada em Mercado."
- Dúvida: "Não entendi. Me diga o que foi, o valor e se é gasto ou ganho."
- Comemoração: "Você atingiu sua meta! Mandou bem 🎉"
