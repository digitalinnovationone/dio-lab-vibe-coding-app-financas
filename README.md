PRD – App de Organização de Finanças Pessoais

Contexto
Criar um aplicativo de Organização de Finanças Pessoais que funcione por meio de conversas em linguagem natural. 
O objetivo é simplificar o controle financeiro, eliminando a necessidade de formulários manuais ou planilhas complexas.

Problema
Muitas pessoas desistem de controlar seus gastos porque os aplicativos atuais exigem muita entrada manual e oferecem pouca personalização. 
A proposta é resolver isso com uma experiência baseada em conversa interativa e recomendações automáticas de economia.

Público-Alvo
Indivíduos que desejam começar a organizar suas finanças de forma prática e acessível, especialmente iniciantes sem experiência prévia em gestão financeira.

Funcionalidades-Chave (com exemplos)
1. Sistema de Login
   - Usuário deve se autenticar para acessar o app.
   - Login simples com e-mail e senha, podendo futuramente incluir autenticação social (Google, Microsoft).
   - Garantia de segurança e privacidade dos dados financeiros.

2. Registrar gastos via chat em linguagem natural
   - “gastei 50 reais no mercado ontem” → app registra valor, categoria e data.
   - “paguei o aluguel de 1200 reais” → sistema entende e salva.

3. Classificar automaticamente as transações
   - “Uber 35 reais” → Transporte.
   - “Netflix 40 reais” → Entretenimento.

4. Definir e acompanhar metas financeiras
   - Meta “economizar 500 reais por mês” → barra de progresso mostra evolução.
   - Meta “gastar menos de 200 reais em restaurantes” → alerta quando o limite está próximo.

5. Receber dicas de economia do “Agente Financeiro”
   - Se o usuário gasta muito em delivery → sugestão: “Que tal cozinhar em casa 2 vezes por semana?”.
   - Se a meta não está sendo cumprida → mensagem motivacional com alternativas.

6. Visualizar relatórios simples e personalizados
   - Gráfico de pizza mostrando porcentagem de gastos por categoria.
   - Linha do tempo mostrando evolução dos gastos mensais.
   - Relatório semanal: “Você gastou 20% menos em transporte esta semana comparado à anterior.”

7. Registrar compras parceladas com início futuro
   - “fiz uma compra de 300 reais, parcelei em 6 vezes e começa a pagar mês que vem” → sistema gera todas as parcelas, define datas de início e fim e organiza o impacto mensal.
   - “comprei uma TV de 2000 reais, 10 parcelas, e só começa no próximo ciclo” → parcelas futuras são agendadas, categoria sugerida é aplicada e alertas são preparados.

8. Inserir e editar valor do salário (com extras)
   - Usuário informa o valor do salário mensal → app registra como base do orçamento.
   - Possibilidade de adicionar valores extras ao longo do mês (ex.: “recebi 200 reais de freelance”).
   - O valor do salário deve ser sempre editável, permitindo ajustes conforme necessário.
   - O dashboard mostra as finanças do mês atual e, ao mudar de mês, atualiza automaticamente os dados para o novo ciclo.

Observação Importante
Todas as funcionalidades devem estar disponíveis em uma única página principal, organizada de forma clara e intuitiva. 
O usuário acessa o sistema após login e encontra o chat, relatórios, metas, salário e dicas integrados em um só ambiente, evitando navegação complexa.

Organização da Página Única
1. Cabeçalho (fixo no topo)
   - Logo ou nome do app.
   - Botão de logout (após login).
   - Acesso rápido às configurações.

2. Área Principal (dividida em seções integradas)
   a) Chat Financeiro
      - Campo de entrada de texto/voz.
      - Histórico de conversas com o “Agente Financeiro”.
      - Respostas automáticas (registro de gastos, dicas, confirmações).

   b) Salário e Extras
      - Campo para inserir e editar valor do salário mensal.
      - Opção de adicionar valores extras ao longo do mês.
      - Integração com o dashboard para mostrar saldo disponível.

   c) Metas Financeiras
      - Barra de progresso para cada meta definida.
      - Alertas visuais quando o limite está próximo.
      - Opção de criar/editar metas diretamente no chat.

   d) Relatórios e Visualizações
      - Gráfico de pizza com categorias de gastos.
      - Linha do tempo mostrando evolução mensal.
      - Relatório semanal em formato de resumo textual.

   e) Compras Parceladas
      - Lista das parcelas futuras já organizadas.
      - Destaque para impacto mensal no orçamento.
      - Alertas de início de ciclo de pagamento.

3. Rodapé (fixo)
   - Links de ajuda.
   - Informações de privacidade e segurança.
   - Versão do app.

Requisitos Não Funcionais
- Segurança: proteção dos dados financeiros do usuário, criptografia e boas práticas de privacidade.
- Acessibilidade e Design Universal: interface inclusiva, responsiva e pensada para oferecer boa experiência ao maior número possível de pessoas, independentemente de idade, habilidade digital ou limitações físicas.
- Performance: respostas rápidas no chat e carregamento leve.

Entregável da IA
A IA deve gerar um plano de MVP contendo:
- Principais telas (login e página única com chat, salário, metas, relatórios, configurações).
- Recursos necessários (NLP, categorização automática, motor de recomendações, banco de dados).
- Esboço de validação inicial com métricas de sucesso (ex.: taxa de interpretação correta das entradas, engajamento semanal).

Tom educativo e linguagem acessível, em português.

Conceito de Design Universal (explicado de forma didática)
Definição
Design universal é a prática de criar produtos, serviços e ambientes que possam ser usados pelo maior número possível de pessoas, sem necessidade de adaptações específicas.

Princípio central
Ao invés de pensar em “usuários típicos” e fazer adaptações depois, o produto já nasce inclusivo.

Exemplos práticos
- Botões grandes e legíveis.
- Alto contraste de cores.
- Navegação simples e intuitiva.
- Suporte a múltiplos modos de interação (texto, voz).

Resumo
Design universal = pensar na diversidade desde o início, garantindo que o app seja útil e agradável para todos.
