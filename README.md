# 📱💰 ChatMoney — App de Finanças Pessoais com Vibe Coding

[![build](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/neurionaisolutions/dio-lab-vibe-coding-app-chatmoney-pia-08-2026-alessandro)
[![license](https://img.shields.io/badge/license-MIT-blue)](LICENSE)
[![version](https://img.shields.io/badge/version-0.1.0-yellowgreen)]

PRD (Documento de Requisitos do Produto) Refinado no Copilot Web:

```txt
PRD – App de Organização Financeira Conversacional

1. Contexto
O aplicativo busca simplificar o controle financeiro pessoal por meio de interações em linguagem natural, eliminando formulários complexos ou planilhas. O diferencial está em oferecer uma experiência conversacional e inclusiva, pensada para tornar as finanças acessíveis a todos.

2. Problema
- Usuários desistem de apps financeiros porque exigem entradas manuais extensas.
- Falta de personalização e recomendações práticas.
- Experiência pouco amigável para iniciantes.

3. Público-Alvo
- Pessoas que querem começar a organizar suas finanças sem complicação.
- Usuários iniciantes em controle financeiro.
- Pessoas que preferem interações simples e conversacionais.

4. Objetivos do Produto
- Tornar o controle financeiro acessível e natural.
- Reduzir barreiras de entrada para iniciantes.
- Oferecer insights e recomendações práticas de economia.
- Criar uma experiência de "bate-papo com seu agente financeiro".
- Garantir Design Universal: acessibilidade e boa experiência para o maior número possível de usuários.

5. Funcionalidades-Chave
- Registro via chat: Usuário informa gastos em linguagem natural ("gastei 50 reais no mercado").
- Classificação automática: O app identifica categoria (alimentação, transporte, lazer).
- Metas financeiras: Usuário define objetivos (ex.: economizar R$ 500/mês).
- Agente Financeiro: Recomendações personalizadas de economia.
- Relatórios simples: Visualizações claras e acessíveis.
- Design Universal: Interface inclusiva, com suporte a leitores de tela e navegação simplificada.

6. MVP – Plano de Entregáveis
Telas Principais
- Tela de Conversa: interface de chat para registrar gastos e receber dicas.
- Tela de Metas: definição e acompanhamento de objetivos financeiros.
- Tela de Relatórios: visão geral de gastos por categoria e progresso das metas.

Recursos Necessários
- Processamento de linguagem natural (NLP).
- Motor de categorização automática.
- Sistema de notificações.
- Banco de dados simples.
- Recursos de acessibilidade (suporte a voz, contraste, navegação simplificada).

Validação Inicial
- Teste com grupo piloto de usuários iniciantes e diversos perfis (incluindo pessoas com necessidades de acessibilidade).
- Métricas: frequência de uso, facilidade de registro, clareza dos relatórios, acessibilidade percebida.
- Feedback qualitativo sobre experiência conversacional e inclusiva.
```

Interações com o Lovable:

> 1) Crie um App de Finanças Pessoais com base no seguinte PRD (Product Requirements Document): {PRD}

> 2) Fiz alguns testes no app para chegar nesse prompt de número 3.

> 3) Gostaria de colocar um nome nesse app de "ChatMoney" e um Bot interativo com o nome de "Piá" — é importante explicar o significado dentro do app, para que usuários de regiões onde "piá" possa ser desconhecido entendam que é um termo carinhoso em português para criança/jovem, transmitindo a ideia de algo "simples, divertido e acessível".

Resultado Final no Lovable: https://chatmoney-pia.lovable.app

<img width="1812" height="892" alt="screenshot-ChatMoney — converse com o Pia sobre seu dinheiro (3)" src="https://github.com/user-attachments/assets/73c84d05-6660-490e-87fc-4814f696a913" />

<img width="1812" height="867" alt="screenshot-Metas e reserva _ ChatMoney (1)" src="https://github.com/user-attachments/assets/4ad3d05f-b271-49af-a053-f8e6bab922e1" />

<img width="1812" height="1508" alt="screenshot-Relatórios _ ChatMoney (1)" src="https://github.com/user-attachments/assets/0363bd9b-a528-4cca-b63c-12840203c1ca" />

<img width="1812" height="874" alt="screenshot-Extrato _ ChatMoney (2)" src="https://github.com/user-attachments/assets/4d354694-e65e-4ccd-8435-dfe5d478bb62" />


# ChatMoney – Resumo das Funcionalidades

## Sumário
- [Contexto](#contexto)
- [Funcionalidades Principais](#funcionalidades-principais)
- [Telas do MVP](#telas-do-mvp)
- [Validação Inicial](#validação-inicial)
- [Identidade do Bot](#identidade-do-bot)
- [Reflexão sobre o processo](#reflexão-sobre-o-processo)
- [Como executar / Início Rápido](#como-executar--início-rápido)
- [Contribuição](#contribuição)
- [Licença](#licença)


## 💰 Contexto
ChatMoney é um aplicativo de organização de finanças pessoais que funciona por meio de conversas naturais.  
O usuário interage com o bot **Piá**, um conselheiro financeiro jovem e amigável, que registra entradas e saídas de dinheiro de forma simples e acessível.

## 🗣 Funcionalidades Principais
- **Registro via chat**: informe seus gastos e receitas em linguagem natural, como "gastei 50 reais no mercado" ou "recebi 3000 reais de salário".
- **Classificação automática**: cada transação é organizada por categoria (alimentação, transporte, lazer, etc.).
- **Metas financeiras**: defina objetivos como "criar uma reserva de emergência de 5000 reais" e acompanhe o progresso.
- **Agente Financeiro (Piá)**: receba dicas de economia e apoio para manter suas finanças equilibradas.
- **Relatórios simples**: visualize extratos, gráficos e resumos claros de receitas, gastos e saldo atual.
- **Design Universal**: interface inclusiva, acessível e intuitiva, pensada para oferecer boa experiência ao maior número possível de usuários.

## 📲 Telas do MVP
- **Tela de Conversa**: interação direta com o Piá para registrar e consultar informações financeiras.
- **Tela de Metas**: definição e acompanhamento de objetivos financeiros.
- **Tela de Relatórios**: visão geral de gastos por categoria e evolução das metas.
- **Tela de Extrato**: lista detalhada de transações organizadas por data e tipo.

## 👥 Validação Inicial
- Testes com usuários iniciantes e perfis diversos.
- Métricas: frequência de uso, facilidade de registro, clareza dos relatórios e percepção de acessibilidade.
- Feedback qualitativo sobre a experiência conversacional com o Piá.

---

## 🤖 Identidade do Bot
- Nome: **Piá**
- Personalidade: jovem, simpático e acessível.
- Função: parceiro de bolso que ajuda o usuário a organizar suas finanças de forma leve e natural.


## 🧠 Reflexão sobre o processo

### O que funcionou bem?
O refinamento do PRD prévio no Copilot foi crucial para o aproveitamento dos 5 créditos gratuitos disponíveis no Lovable, que foram consumidos em apenas 2 interações.

### O que não funcionou como o esperado?
Minha expectativa era de uma maior interação com o Lovable utilizando os créditos gratuitos, mas os resultados me surpreenderam mesmo com uma capacidade reduzida ao aplicar criatividade nas interações. Aprendi que a qualidade do prompt é mais importante que a quantidade de tentativas.

### O que aprendi sobre conversar com IAs?
Aprendi que conversar com IAs é semelhante a conversar com uma pessoa: quanto mais informações e detalhes você fornece, mais clara fica a resposta, melhorando a interação e alcançando melhores resultados. Um PRD bem estruturado é mais valioso que múltiplas iterações genéricas.

> 😎 Por Alessandro Teixeira - 19/08/2026


## Como executar / Início Rápido
- Abrir a visualização pública: https://chatmoney-pia.lovable.app
- Se desejar executar localmente (se o projeto tiver código):
  1. Clone o repositório: `git clone https://github.com/neurionaisolutions/dio-lab-vibe-coding-app-chatmoney-pia-08-2026-alessandro.git`
  2. Entre na pasta do projeto: `cd dio-lab-vibe-coding-app-chatmoney-pia-08-2026-alessandro`
  3. Instale dependências (se houver): `npm install` ou `yarn`
  4. Inicie o app (se houver script): `npm start` ou `npm run dev`

> Observação: adapte os comandos acima ao stack do projeto (Node, Flutter, web estática, etc.).

## Contribuição
Contribuições são bem-vindas! Se quiser ajudar:
1. Abra uma issue descrevendo a sugestão ou bug.
2. Crie um branch a partir do `main` com um nome descritivo.
3. Envie um pull request com uma descrição clara das mudanças.

Veja também arquivos de configuração (ex.: CONTRIBUTING.md) para diretrizes mais detalhadas.

## Licença
Este repositório está licenciado sob a **Licença MIT**. Veja o arquivo `LICENSE` para mais detalhes.

---
