# Fluxo - Gestão Financeira com Linguagem Humana Este projeto foi desenvolvido como parte de um desafio de Bootcamp na [DIO](https://www.dio.me/)Criando um APP de Organização de Finanças Pessoais com Vibe Coding.
O objetivo é criar o conceito de um App de Finanças Pessoais utilizando IA generativa para acelerar o design e a documentação.

## Conceito do App
O **Fluxo** nasceu da necessidade de tornar o controle financeiro menos intimidador. Diferente de apps cheios de termos técnicos, o Fluxo utiliza **linguagem natural e amigável** para interagir com o usuário, focando em:
- **Simplicidade:** Interface limpa em Preto, Branco e LightGreen.
- **Proximidade:** O app fala como um amigo ("Onde o seu dinheiro foi parar?").
- **IA Assistiva:** Suporte integrado para tirar dúvidas financeiras básicas.
- ---
## 🛠️ Processo de Criação (Engenharia de Prompts)
Prompt Inicial a gemini:
"Agora preciso de um PRD par um app de "Finanças Pessoais"-a ideia central do app é que: 1.seja de facil usabilidade-2.Linguaguem que se aproxima da humana-3.Este PRD colocarei no Lovable-4.Deve ter imagens-5.As cores do app devem ser -preto-branco-lightgreen"

Para chegar ao resultado final do PRD e do conceito visual, utilizei uma abordagem de camadas com a IA, seguindo as instruções do desafio:

### 1. Instruções Iniciais (Input do Desafio)
*O que foi solicitado à IA:*
> "Criar um PRD para um app de Finanças Pessoais de fácil usabilidade, linguagem humana, cores preto/branco/lightgreen e focado para uso no Lovable."

### 2. Prompt Final Estruturado (O "Coração" do Projeto)
Este foi o prompt consolidado que gerou a documentação técnica e os requisitos que você vê neste repositório:

Product Requirements Document (PRD) – App de Finanças Pessoais
Data: 23 de janeiro de 2026 
Versão: 1.0 
Produto: App de Finanças Pessoais "Fluxo" 
Autor: Lucimar Pereira dos Santos
1. Visão Geral do Produto
​​O aplicativo "Fluxo" é uma ferramenta de finanças pessoais projetada para capacitar os usuários a gerenciar seu dinheiro de forma intuitiva, sem a complexidade dos softwares financeiros tradicionais. Nosso objetivo é transformar o gerenciamento financeiro de uma tarefa árdua em uma experiência simples e até agradável, utilizando uma interface amigável e uma linguagem que se aproxima da conversação humana.

Propósito: Simplificar o controle financeiro pessoal, promovendo a educação financeira e a tomada de decisões conscientes. Público-alvo: Indivíduos que buscam uma maneira fácil de monitorar gastos, planejar orçamentos e entender melhor sua saúde financeira, sem precisar ser um especialista.

2. Metas do Produto
Engajamento: Aumentar a frequência de uso do aplicativo em 30% em 6 meses, refletindo o conforto do usuário com a ferramenta.

Adoção: Alcançar 10.000 downloads e 5.000 usuários ativos mensais em 1 ano.

Satisfação do Usuário: Manter uma avaliação média de 4.5 estrelas na Google Play Store, com feedback positivo sobre a facilidade de uso e a clareza das informações.

Consciência Financeira: Capacitar os usuários a identificar seus maiores gastos e economizar ativamente.

3. Histórias de Usuário (User Stories)
Como [tipo de usuário], eu quero [funcionalidade], para que eu possa [benefício].

Como um usuário iniciante, eu quero adicionar uma nova despesa rapidamente, para que eu possa registrar meus gastos sem interrupção.

Como um usuário preocupado com o orçamento, eu quero ver um resumo visual dos meus gastos mensais, para que eu possa identificar onde estou gastando mais.

Como um usuário que quer economizar, eu quero definir metas de orçamento para categorias específicas, para que eu possa controlar meus gastos e alcançar meus objetivos.

Como um usuário que valoriza a privacidade, eu quero ter certeza de que meus dados financeiros estão seguros, para que eu possa usar o aplicativo com tranquilidade.

Como um usuário que busca clareza, eu quero entender os termos financeiros em linguagem simples, para que eu possa aprender e gerenciar meu dinheiro sem confusão.

4. Requisitos Funcionais
O aplicativo Fluxo oferecerá as seguintes funcionalidades principais:

4.1 Registro de Transações:

Adição manual de despesas e receitas.

Categorização intuitiva de transações (Ex: "Comida", "Transporte", "Lazer").

Adição de notas e fotos (opcional) para cada transação.

Edição e exclusão de transações.

Linguagem Humana: Frases como "O que você gastou hoje?" ou "Quanto entrou na sua conta?".
4.2 Visão Geral (Dashboard):

Exibição do saldo atual.

Gráficos simples e coloridos mostrando gastos por categoria.

Resumo das últimas transações.

Linguagem Humana: "Seu dinheiro no bolso", "Onde o seu dinheiro foi parar?".
4.3 Orçamentos:

Criação de orçamentos mensais para diferentes categorias.

Monitoramento do progresso em relação ao orçamento.

Alertas quando o usuário se aproxima ou excede o orçamento.

Linguagem Humana: "Quanto você quer gastar com...?", "Vamos segurar a mão aqui!".

​4.4 Relatórios Simplificados:

Relatórios visuais de fluxo de caixa (receitas vs. despesas).

Histórico de gastos por categoria em diferentes períodos (semanal, mensal, anual).

Linguagem Humana: "Para onde seu dinheiro foi neste mês?", "Como você se saiu no último trimestre?".

4.5 Contas (Bancos/Carteira):

Adição de múltiplas contas (dinheiro em espécie, conta corrente, poupança).

Transferência entre contas.

Linguagem Humana: "Seu dinheiro está aqui e ali", "Movimente seu capital".
5. Requisitos Não Funcionais5.1 Usabilidade (UX/UI):Interface: Clara, intuitiva e mínima. Navegação com poucos cliques para as ações principais.Linguagem: Natural e conversacional, evitando termos financeiros complexos.Feedback: Respostas visuais e sonoras claras para as ações do usuário.

5.2 Performance:Tempo de carregamento inicial menor que 3 segundos.Respostas instantâneas para interações do usuário (adição de transações, navegação).

5.3 Segurança:Criptografia de ponta a ponta para dados financeiros.Autenticação biométrica (impressão digital/facial) opcional.Backup seguro dos dados na nuvem (opcional, com consentimento do usuário).

5.4 Confiabilidade:Disponibilidade do serviço (99.9% de uptime para serviços de sincronização).Armazenamento de dados robusto e com redundância.

5.5 Acessibilidade:Suporte a tamanhos de fonte dinâmicos.Modo de alto contraste (se aplicável, para daltonismo).

5.6 Design (Cores):Primária: Preto (#000000) - Usado para textos principais, fundos escuros.Secundária: Branco (#FFFFFF) - Usado para fundos claros, textos em fundos escuros.Destaque/Ação: Light Green (#90EE90) - Usado para botões de ação, gráficos positivos, elementos interativos.Tipografia: Fonte limpa e legível (ex: Montserrat, Open Sans).

6. Fluxos de Usuário Críticos6.1 Registro de Nova Transação:Usuário clica no botão "+" na Dashboard.Apresentado tela "Nova Transação" com opções "Despesa" ou "Receita".Usuário seleciona tipo e preenche valor, descrição e categoria.Usuário clica em "Salvar".Transação é adicionada e Dashboard atualizada.
   
6.2 Verificação de Orçamento:Usuário navega para a tela "Orçamentos".Visualiza barras de progresso para cada categoria.Recebe um alerta visual se uma categoria estiver próxima ou excedendo o limite.

7. Requisitos Técnicos (Visão Geral)Plataforma: Android (desenvolvimento inicial), iOS (futuro).Linguagem de Desenvolvimento: Kotlin (Android).Backend: Firebase (Firestore para banco de dados, Authentication para usuários).APIs de Terceiros: (A definir, se houver integração bancária ou de investimentos).Testes: Testes unitários, de integração e de UI.

 8. Considerações Futuras (Roadmap)
Sincronização bancária automática.

Metas de poupança com acompanhamento.

Módulo de investimentos simplificado.

Modo "família" para gerenciamento compartilhado.

Exportação de dados.

9. Métricas de Sucesso
MAU (Monthly Active Users): Número de usuários que abrem o app pelo menos uma vez por mês.

DAU (Daily Active Users): Número de usuários que abrem o app pelo menos uma vez por dia.

Transações Registradas: Média de transações por usuário por mês.

Retenção: % de usuários que retornam após a primeira semana/mês.

Avaliações na Loja: Média de estrelas e comentários.


### Funcionalidades desta primeira versão:

#Dashboard com saldo e gráficos de gastos
Lista de transações recentes
Adição rápida de despesas/receitas
Orçamentos por categoria com barras de progresso
Múltiplas contas
Design:

#Fundo escuro elegante com cards sutis
Verde claro (#90EE90) para ações e valores positivos
Tipografia limpa, linguagem humana em português
Animações suaves com framer-motion

## Prompt Final (PRD) usado na IA
Para gerar a estrutura do app no Lovable/Copilot, utilizei o seguinte PRD estruturado-gerado no Gemini:

## Interações e Visual do Projeto

Abaixo, imagens do conceito gerado durante o processo:

### Dashboard Principal
![Dashboard do App](LINK_DA_IMAGEM_2)

### Registro de Gastos
![Registro de Gastos](LINK_DA_IMAGEM_1)

### Monitoramento de Orçamento
![Orçamento](LINK_DA_IMAGEM_3)

---
##Link Proejto gerado na Lovable:
https://simple-savings-chat.lovable.app

## Reflexão sobre o Processo
Durante o desenvolvimento deste desafio, aprendi que:
1. **Prompts são Especificações:** A clareza no texto (PRD) é o que define se a IA entregará um protótipo funcional ou algo genérico.
2. **Design System:** Manter uma paleta restrita (Preto/Branco/LightGreen) facilita a consistência visual automática em ferramentas como o Lovable.
3. **Agilidade:** O que levaria dias para documentar e prototipar manualmente, foi estruturado em minutos com o auxílio estratégico da IA.

---
 Desenvolvido por Lucimar Pereira dos Santos

