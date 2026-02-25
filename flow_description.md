Flow Description — VibeFinanças
Visão geral
Fluxo conversacional mínimo para protótipo VibeFinanças no Lovable ou Landbot.
Objetivo: permitir registro rápido de transações via chat, confirmação antes de salvar e persistência em Google Sheets via Webhook. Projeto otimizado para testes com mocks e posterior integração com LLMs.

Variáveis usadas
@name — nome do usuário

@objective — objetivo financeiro (Economizar; Investir; Quitar dívidas; Organizar gastos)

@lang — idioma selecionado (pt/en/es/fr)

@user_text — texto livre do usuário (entrada do chat)

@amount — valor extraído (número normalizado)

@category — categoria detectada (texto)

@date — data detectada (padrão: hoje se não houver)

@note — observação livre

@edit_text — texto para edição quando usuário escolhe Editar

Blocos e transições
Start
Descrição: ponto inicial do bot.

Transição: conecta para Ask Name.

Ask Name
Tipo: Pergunta (input curto)

Texto: Qual é o seu nome?

Salvar em: @name

Transição: Ask Objective

Ask Objective
Tipo: Pergunta com opções

Texto: Qual seu principal objetivo financeiro?

Opções: Economizar; Investir; Quitar dívidas; Organizar gastos

Salvar em: @objective

Transição: Ask Language

Ask Language
Tipo: Pergunta com opções

Texto: Escolha o idioma: PT / EN / ES / FR

Salvar em: @lang

Transição: Welcome Message

Welcome Message
Tipo: Mensagem

Texto: Bem‑vindo ao VibeFinanças, @name! Posso te ajudar a registrar um gasto ou criar uma meta. Digite seu gasto, ex: "Gastei R$50 no mercado".

Transição: User Input (Chat)

User Input Chat
Tipo: Input livre (text)

Salvar em: @user_text

Ação: enviar para Processing (Mock) para parsing

Transição: Processing

Processing Mock
Objetivo: extrair @amount, @category, @date, @note de @user_text usando heurísticas simples.

Heurísticas sugeridas:

Regex valor: R\$?\s?(\d{1,3}(?:[.,]\d{2})?) → normalize , para . → salvar em @amount

Detecção de data: palavras como hoje, ontem ou formato dd/mm → salvar em @date

Categoria por palavras-chave:

Alimentação: mercado, restaurante, padaria, comida

Transporte: uber, táxi, ônibus, gasolina

Lazer: cinema, bar, show

Poupança: poupança, transferi, investi

Outros: fallback Outros

Note: texto restante → @note

Resposta mock: Sugestão: registrei R${{amount}} em {{category}}. Deseja confirmar?

Transição: ConfirmTransaction

ConfirmTransaction
Tipo: Cartão com Quick Replies (3 botões)

Texto do cartão: Sugestão: registrei R${{amount}} em {{category}} no dia {{date}}. Deseja confirmar?

Botões e ações:

Confirmar

Ação: chamar Webhook POST para salvar (payload abaixo)

Mensagem: Pronto! Transação salva.

Transição: Welcome Message

Editar

Ação: abrir input para editar valor/categoria (salvar em @edit_text)

Fluxo: após edição, voltar para Processing (reprocessar)

Reclassificar

Ação: mostrar lista de categorias rápidas (botões) → atualizar @category → voltar para ConfirmTransaction

FAQ Tutorial
Tipo: Menu com perguntas frequentes + botão Não encontrei

Ação do Não encontrei: redireciona para User Input Chat

Error Fallback
Texto: Desculpe, não entendi o valor ou a categoria. Pode confirmar o valor e a categoria, por favor?

Transição: User Input Chat

Webhook Persistência
Recomendação: usar Make (Integromat) ou Zapier para receber POST do bot e inserir no Google Sheets.

Planilha colunas: timestamp,user_name,amount,category,date,note,source

Exemplo de payload JSON:

{
  "timestamp": "{{now}}",
  "user_name": "{{@name}}",
  "amount": "{{amount}}",
  "category": "{{category}}",
  "date": "{{date}}",
  "note": "{{note}}",
  "source": "lovable"
}

Observação: enviar ao Webhook somente após confirmação do usuário.

Testes sugeridos
Gastei R$50 no mercado

Paguei R$30 de Uber ontem

Transferi R$200 para poupança

Comprei café R$7

Gastei 15,50 em cinema

Paguei R$120 no restaurante

Assinei serviço R$29,90

Comprei remédio R$25

Gastei R$300 em roupas

Doação R$20 para caridade

Microcopy pronta
Welcome: Bem‑vindo ao VibeFinanças, @name! Posso te ajudar a registrar um gasto ou criar uma meta.

Prompt de exemplo: Digite seu gasto, ex: "Gastei R$50 no mercado".

Confirm: Sugestão: registrei R${{amount}} em {{category}}. Deseja confirmar?

Saved: Pronto! Transação salva. Quer registrar outra?

Fallback: Desculpe, não entendi. Pode confirmar o valor e a categoria?

Editar instrução: Digite o novo valor e/ou categoria, ex: "R$45 no restaurante".

Observações de implementação rápida
Mocks primeiro: valide UX com respostas estáticas antes de integrar LLM.

Limitar histórico: quando usar LLM, envie apenas as últimas 4–6 mensagens.

Salvar somente após confirmação: evita registros incorretos.

Internacionalização: mantenha microcopy em PT‑BR por padrão e traduza conforme @lang.

Evidências: capture screenshots de onboarding, modal ConfirmTransaction e Google Sheets.
