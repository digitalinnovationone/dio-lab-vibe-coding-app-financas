# VibeFinanças

## 1. Visão geral
**VibeFinanças** é um protótipo de fluxo conversacional para registro rápido de transações via chat. O objetivo é capturar transações com baixo atrito, validar e confirmar com o usuário e persistir os dados em uma planilha (Google Sheets) via webhook ou serviço intermediário. Este repositório reúne artefatos de prototipagem, exemplos de payloads, amostras de planilha e placeholders para evidências visuais — tudo pensado para testes manuais, automação de integração e futura conexão com backends ou LLMs.

---

## 2. Entregáveis e histórico do que foi feito
**Arquivos e pastas incluídos**
- `assets/screenshots/` — pasta para capturas de tela (contém `.gitkeep` como placeholder).  
- `flow_description.md` — descrição detalhada do fluxo conversacional, roteiro de perguntas, regras de validação e exemplos de interação.  
- `sheet_sample.csv` — amostra de planilha com colunas e linhas de exemplo para validar mapeamento e testes.  
- `README.md` — este arquivo (em Markdown).

**Resumo das ações realizadas nesta entrega**
- Criação e edição de `flow_description.md` com roteiro completo do fluxo.  
- Criação de `sheet_sample.csv` com exemplos representativos.  
- Inclusão de `assets/screenshots/.gitkeep` para manter a pasta no repositório.  
- Branch `cleanup-placeholders` criado; PR aberto e **mesclado em `main`**; merge commit preservado no histórico.  
- Commits com mensagens descritivas documentando cada etapa do trabalho.

---

## 3. Fluxo conversacional detalhado (roteiro, variáveis e validações)

### Objetivo do fluxo
Capturar: **tipo**, **valor**, **categoria**, **data**, **observação** e opcionalmente **usuario_id**; confirmar com o usuário; enviar payload JSON ao webhook para persistência.

### Roteiro passo a passo
1. **Trigger / Início**  
   - Ativado por palavra-chave, botão ou evento.  
   - Mensagem inicial sugerida: “Vamos registrar uma transação? (sim/não)”.

2. **Tipo**  
   - Pergunta: “É receita ou despesa?”  
   - Validação: aceitar `receita` ou `despesa` (case-insensitive); oferecer botões rápidos.

3. **Valor**  
   - Pergunta: “Qual o valor?”  
   - Validação: número > 0; aceitar formatos com vírgula ou ponto; normalizar para decimal com ponto.

4. **Categoria**  
   - Pergunta: “Qual a categoria?” (sugestões: Alimentação, Transporte, Lazer, Salário, etc.)  
   - Validação: string curta; mapear para categorias canônicas quando aplicável.

5. **Data**  
   - Pergunta: “Qual a data?”  
   - Aceitar: `hoje`, `ontem`, `YYYY-MM-DD`, `DD/MM/YYYY`; normalizar para `YYYY-MM-DD`.

6. **Observação** (opcional)  
   - Pergunta: “Alguma observação?” (limite sugerido: 500 caracteres).

7. **Confirmação**  
   - Mostrar resumo formatado e perguntar: “Confirmar e salvar? (sim/não)”.

8. **Persistência**  
   - Ao confirmar, enviar POST JSON ao webhook; tratar resposta e informar sucesso/erro ao usuário.

### Variáveis e regras de validação
- `usuario_id` — string; opcional.  
- `tipo` — `receita` | `despesa` (obrigatório).  
- `valor` — decimal > 0 (obrigatório).  
- `categoria` — string (recomendada).  
- `data` — `YYYY-MM-DD` (obrigatório; aceitar termos relativos).  
- `observacao` — string (opcional; até 500 chars).

**Normalizações aplicadas**
- Remover símbolos de moeda; substituir vírgula por ponto; converter para `float`.  
- Converter `hoje`/`ontem` para `YYYY-MM-DD` no timezone do usuário.  
- Mapear categorias livres para um conjunto canônico quando possível.

---

## 4. Formatos, exemplos e testes práticos

### Exemplo de payload JSON (webhook)
```json
{
  "usuario_id": "user_123",
  "tipo": "despesa",
  "valor": 45.90,
  "categoria": "Transporte",
  "data": "2026-02-24",
  "observacao": "Uber para reunião"
}

---

sheet_sample.csv (colunas e exemplo)
Colunas recomendadas: usuario_id,tipo,valor,categoria,data,observacao  
Exemplo de linha:

user_123,despesa,45.90,Transporte,2026-02-24,"Uber para reunião"

Testes manuais rápidos
Ler flow_description.md e seguir o roteiro de perguntas.

Usar sheet_sample.csv para validar colunas e formato.

Enviar payloads de teste para um endpoint (ex.: webhook.site) e verificar recebimento.

Testes automatizados sugeridos
Script Node/Python que:

Lê sheet_sample.csv.

Gera payloads JSON válidos e inválidos.

Envia POST para endpoint de teste e valida respostas.

Testes unitários para funções de normalização (valor, data, categoria).

Exemplo rápido (curl)

curl -X POST https://webhook.site/SEU_ENDPOINT \
  -H "Content-Type: application/json" \
  -d '{"usuario_id":"user_123","tipo":"despesa","valor":45.9,"categoria":"Transporte","data":"2026-02-24","observacao":"Teste"}'

5. Integração prática e opções de implementação
Opção A — Google Apps Script (rápido para protótipo)
Criar Apps Script ligado à planilha.

Implementar doPost(e) que parseie e.postData.contents e escreva uma nova linha.

Publicar como Web App (definir permissões).

Usar URL do Web App como webhook no fluxo.

Pontos a documentar no Apps Script

Mapeamento de colunas; tratamento de duplicatas; logs; tratamento de erros.

Opção B — Serviço intermediário (recomendado para produção)
Pequeno servidor (Express/Flask) que:

Valida e normaliza payload.

Usa Google Sheets API (OAuth2) para inserir linhas.

Implementa retry, logging e monitoramento.

Vantagens: controle de erros, transformação, autenticação e testes.

6. Git, evidências, checklist e próximos passos
Verificações e comandos úteis (para confirmar estado atual)

# entrar no repositório
cd /c/Users/renan/dio-lab-vibe-coding-app-financas/dio-lab-vibe-coding-app-financas

# garantir main atualizado
git checkout main
git pull origin main

# ver últimos commits (merge commit deve aparecer)
git log --oneline -n 10

# confirmar arquivos
ls -la

# confirmar que branch cleanup-placeholders foi removida do remoto
git branch -r | grep cleanup-placeholders || echo "origin/cleanup-placeholders não existe"

Evidências a anexar à entrega
URL do PR mesclado (copiar do GitHub).

Saída de git log --oneline -n 5 mostrando o merge commit.

Screenshots do PR com status Merged e da árvore de arquivos no main.

Links diretos para flow_description.md e sheet_sample.csv no GitHub.

Checklist final para entrega
[ ] flow_description.md completo e revisado.

[ ] sheet_sample.csv com exemplos representativos.

[ ] assets/screenshots/ com imagens ou .gitkeep como placeholder.

[ ] PR criado e Merged em main.

[ ] git log com merge commit salvo como evidência.

[ ] README final em Markdown (este arquivo) commitado.

Próximos passos recomendados (priorizados)
Implementar endpoint de gravação (Apps Script ou serviço intermediário) e documentar deploy.

Adicionar exemplos de conversas reais e capturas de tela em assets/screenshots/.

Criar testes automatizados que validem payloads gerados a partir de sheet_sample.csv.

Incluir CHANGELOG.md com resumo das entregas por PR.

Adicionar LICENSE (ex.: MIT) se necessário.

Contato e suporte
Abra uma Issue no repositório para dúvidas, sugestões ou relatos de bugs. Para comunicação direta, use o canal acordado com a equipe (e‑mail/Slack).


**Próxima ação que eu executo por você**  
Posso gerar agora os **comandos exatos** para criar o branch `docs/update-readme`, commitar este `README.md` em Markdown e abrir o PR; cole **Gerar comandos** e eu preparo tudo pronto para você colar no terminal.

## 🔗 Demonstração do Aplicativo (Lovable)

O protótipo funcional do **VibeFinanças** foi implementado utilizando a plataforma **Lovable** e pode ser acessado no link abaixo:

👉 https://vibe-chat-finance.lovable.app

### O que é demonstrado no aplicativo
- Onboarding do usuário (nome, objetivo financeiro e idioma)
- Fluxo guiado de registro de transações (wizard)
- Captura estruturada de dados (tipo, valor, categoria, data e observação)
- Confirmação explícita antes do salvamento
- Suporte multilíngue (Português, Inglês, Espanhol e Francês)
- Convivência entre fluxo guiado e entrada por texto livre (NLU)

Este link serve como evidência funcional do conceito descrito neste repositório.

---

## 📸 Evidências Visuais

Abaixo estão algumas capturas de tela do aplicativo em funcionamento, demonstrando o fluxo guiado de registro de transações e a interface do usuário.

> As imagens estão disponíveis na pasta `assets/screenshots/`.

