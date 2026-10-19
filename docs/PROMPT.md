# Prompt final (PRD) — Finanças Pessoais com IA

Quero criar um web app de finanças pessoais, em português do Brasil, que ajude pessoas a entenderem para onde o dinheiro está indo e quanto ainda podem gastar com segurança. O produto deve funcionar bem no celular e no computador, com uma experiência simples para quem não quer preencher planilhas nem cadastrar cada compra manualmente.

## Problema

Muitas pessoas chegam ao fim do mês sem saber como os gastos se acumularam. As informações ficam espalhadas por contas e cartões, a categorização manual dá trabalho e compromissos futuros — como parcelas, contas recorrentes e dívidas — são difíceis de visualizar.

## Público-alvo

- Pessoas que recebem salário e querem organizar o orçamento sem lançamentos manuais constantes.
- Pessoas que precisam reunir contas e cartões de diferentes instituições numa visão só.
- Pessoas que usam o rotativo do cartão e precisam compreender o saldo da dívida e comparar planos de pagamento.

## Proposta de valor

Conectar as informações financeiras do usuário, organizar transações automaticamente e transformar os dados em uma visão clara do presente e do futuro. A tela inicial deve responder à pergunta “quanto posso gastar hoje?” e permitir conferir a conta usada para chegar ao resultado.

## Funcionalidades do produto

1. Criar conta, entrar com segurança e concluir um onboarding que explique o uso dos dados, conecte instituições e apresente um primeiro retrato financeiro.
2. Reunir contas, cartões, saldos, faturas e transações, com busca, filtros e detalhes de cada lançamento.
3. Categorizar transações automaticamente, permitir correções e aplicar uma correção a lançamentos semelhantes.
4. Identificar transferências entre contas próprias, recorrências, parcelas futuras e pagamentos de fatura sem contá-los como gasto duplicado.
5. Mostrar o valor diário disponível, o saldo previsto e os próximos compromissos com cálculos explicáveis.
6. Ajudar a planejar gastos por categoria, metas de economia e dívidas, incluindo comparação entre estratégias de quitação.
7. Exibir alertas relevantes e um resumo semanal curto.
8. Oferecer um assistente em linguagem natural que responda com base exclusivamente nos dados do usuário e permita abrir as transações que sustentam a resposta.
9. Permitir gerenciar conexões e consentimentos, preferências, tema, exportação dos dados e exclusão da conta.

## Segurança e limites

- Isolar os dados por usuário e proteger sessões e requisições que alteram dados.
- Mascarar informações pessoais antes de enviá-las a modelos de IA.
- Não movimentar dinheiro, pagar faturas, oferecer crédito ou recomendar investimentos.
- Não inventar valores: cálculos financeiros devem ser feitos por regras explícitas e dados persistidos, não pelo modelo de linguagem.
- Permitir que o usuário revise e corrija classificações e confirmações financeiras.

## Experiência e linguagem

- Interface responsiva, com navegação adequada para celular e computador.
- Todo texto visível em português do Brasil; moeda em reais e datas no formato brasileiro.
- Apresentar estados de carregamento, vazio e erro, acessibilidade por teclado, foco visível e alvos de toque confortáveis.
- Usar linguagem direta, acolhedora e sem julgamentos sobre hábitos financeiros.

## Diretrizes técnicas

Construir como web app full-stack: React, Vite e TypeScript no front-end; Tailwind CSS e shadcn/ui para componentes; Express e TypeScript no servidor; PostgreSQL com Drizzle ORM; validação com Zod; testes automatizados para regras financeiras e rotas. Manter a API e o front-end na mesma origem. Integrar IA por meio das integrações gerenciadas do Replit e manter um provedor simulado para desenvolvimento e testes.

## Critérios de sucesso

- O usuário consegue entender o valor diário disponível e conferir os componentes do cálculo.
- As transações aparecem categorizadas e podem ser corrigidas sem perder a correção numa sincronização posterior.
- Transferências próprias e pagamentos de fatura não são contabilizados como gastos comuns.
- Projeções, alertas e respostas do assistente são consistentes com os dados persistidos.
- As telas principais funcionam em celular e computador sem rolagem horizontal.
