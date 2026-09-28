# PRD — Tostão: seu agente financeiro por conversa

> Briefing usado no Claude Design. A Mensagem 1 cria o protótipo base; as Mensagens 2 a 5 são enviadas uma por vez, na ordem.

## Mensagem 1 — Protótipo base

Crie o protótipo interativo de alta fidelidade do **Tostão**, um app mobile de finanças pessoais em que o usuário controla o dinheiro **conversando com um agente de IA**, sem formulários. Slogan: "Controle seu dinheiro em 5 segundos por dia, só conversando." Tudo em português do Brasil, valores em R$ (formato R$ 1.234,56) e datas dd/mm.

Use o arquivo anexado (logo-tostao.svg) como logo e ícone do app: uma moeda verde em forma de balão de conversa, com a letra T branca e um brilho âmbar.

### Problema
Pessoas abandonam apps de finanças porque registrar cada gasto em formulários é cansativo, orçamento parece punição e os apps mostram números sem dizer o que fazer com eles.

### Público
Iniciantes em organização financeira, de 20 a 40 anos, que usam Pix no dia a dia. Personas: Ana (24, CLT, "meu salário some e não sei onde"), Carlos (38, autônomo, "nunca sei quanto posso gastar") e Juliana (31, "começo a guardar e desisto").

### Formato
Protótipo navegável em moldura de celular (390×844), com barra inferior de 5 abas: **Chat** (central e destacada), **Painel**, **Transações**, **Caixinhas** e **Relatórios**. Perfil no avatar do topo.

### Dados de exemplo
Usuária "Ana", renda de R$ 3.500, com 2 meses de transações realistas (iFood, Uber, mercado, aluguel de R$ 1.200, Netflix, farmácia, salário), limites por categoria e 2 caixinhas: "Viagem ✈️" (R$ 2.500 de R$ 5.000, prazo dezembro) e "Reserva 🛟" (R$ 800 de R$ 3.000).

### Telas
1. **Chat (principal):** conversa com o agente Tostão, campo fixo embaixo com botão de microfone e atalhos rápidos ("Gastei", "Recebi", "Como estou no mês?", "Minhas metas").
2. **Painel:** saldo do mês, destaque "Livre para gastar", receitas × despesas, 3 maiores categorias e progresso das caixinhas.
3. **Transações:** lista agrupada por dia, busca e filtro por categoria, com ícone e cor de cada categoria.
4. **Caixinhas:** metas com emoji, barra de progresso, valor-alvo, prazo e aporte mensal sugerido.
5. **Relatórios:** rosca por categoria, barras dos últimos 6 meses e comparação com o mês anterior, cada gráfico com uma frase de insight do agente.

### O chat precisa funcionar de verdade
Ao digitar uma frase e enviar, o protótipo interpreta o texto e mostra um **card de confirmação** com valor, categoria, data e descrição, mais os botões **Confirmar** e **Corrigir**. Ao confirmar, a transação entra na lista e o Painel atualiza. Exemplos que devem funcionar:
- "gastei 45 no ifood ontem" → Despesa · R$ 45,00 · Alimentação › Delivery · ontem
- "uber 23,90 e padaria 12" → **duas** despesas (Transporte e Alimentação)
- "caiu o salário, 3.500" → Receita · R$ 3.500,00 · Salário
- "50 conto de gasolina" → Despesa · R$ 50,00 · Transporte › Combustível
- "guardei 200 na viagem" → aporte na caixinha Viagem
- "quanto gastei com uber esse mês?" → resposta com o valor calculado dos dados

### Personalidade do agente Tostão
Consultor amigo e educador, nunca julgador. Frases curtas (no máximo 3), no máximo 1 emoji, sempre com números reais da usuária. Celebra o progresso antes de apontar problemas, e toda crítica vem com uma ação pequena e concreta. Não recomenda produtos financeiros específicos. Exemplos:
- "Anotado! R$ 45 em Delivery 🍔 Você ainda tem R$ 155 livres nessa categoria."
- "Opa, Lazer já está em 80% do limite e ainda faltam 12 dias. Quer que eu ajuste o plano?"
- "Caixinha Viagem chegou a 50%! No ritmo atual você bate a meta em novembro."

### Identidade visual
Fintech moderna e acolhedora, no nível de Nubank e Revolut.
- Cores: primária #10B981, secundária #0F3D3E, destaque #F59E0B (IA e conquistas), receita #22C55E, despesa #F43F5E, fundo #F8FAFC.
- Tipografia: Plus Jakarta Sans em títulos e valores grandes, Inter nos textos.
- Cards com cantos de 16px, sombras suaves, microanimações na entrada de mensagens e nas barras de progresso.
- Contraste AA e áreas de toque de 44px.

Priorize que o fluxo **"digitar um gasto → confirmar → ver o Painel atualizado"** funcione perfeitamente.

## Mensagem 2 — Onboarding e plano de economia

Adicione antes do Chat um onboarding conversacional com 4 perguntas do Tostão: nome, renda mensal (aceita "é variável"), gastos fixos (chips: aluguel, contas, internet, transporte, escola) e objetivo principal (chips: sair das dívidas, criar reserva, juntar pra algo, só organizar). No final, o agente apresenta um card com o plano de economia 50/30/20 adaptado, com limites por categoria e botão "Começar". Inclua também um exemplo de alerta de 80% do limite e um resumo semanal automático no chat.

## Mensagem 3 — Detalhes do produto

Refine a tela de Relatórios com filtro por período e insights do agente em cada gráfico. Nas Transações, adicione a sugestão "Isso parece uma assinatura. Quer marcar como recorrente?" para gastos repetidos, e mostre que, ao corrigir uma categoria, o app lembra da preferência. Crie também a tela de Perfil com renda, limites por categoria, alternância de tema e o aviso "O Tostão é um assistente educativo e não substitui orientação financeira profissional."

## Mensagem 4 — Modo escuro e versão desktop

Crie o modo escuro completo (fundo #0B1215) e uma versão desktop do app, com o chat à direita e o painel à esquerda. Adicione estados vazios ilustrados e amigáveis para quando não houver transações ou caixinhas. Revise a consistência de espaçamento, tipografia e cores em todas as telas.

## Mensagem 5 — Landing page

Crie uma landing page de apresentação do Tostão: hero com o slogan e o celular mostrando o chat, 3 benefícios (registro por conversa, agente que dá dicas reais, metas que motivam), seção "Como funciona" em 3 passos e botão "Experimentar o protótipo".
