# AGENTS.md — Instruções para a IA

Este arquivo orienta ferramentas de IA (Copilot, Lovable, agentes de código) sobre o projeto.

## O que é este projeto

Laboratório de **Vibe Coding** para a DIO: um app de **Organização de Finanças Pessoais** construído por conversa com IA, sem escrever código manualmente. O produto final pode ser gerado pelo **Lovable** ou pelo **Copilot** seguindo o guia.

## Documentos de referência (leia primeiro)

| Arquivo | Função |
|---|---|
| `README.md` | Guia completo de Vibe Coding, regras de ouro e etapas do desafio |
| `PRD.md` | Documento de Requisitos do Produto — **contexto persistente** para a IA |
| `ARCHITECTURE.md` | Arquitetura do repositório e do app (camadas, fluxos e diagramas) |
| `prompts/` | Prompts prontos, um arquivo por fase (0 a 6) |

## Regras para a IA

1. **Idioma:** sempre responder em português.
2. **Contexto:** ao iniciar qualquer tarefa, ler `PRD.md` e a fase atual em `prompts/`.
3. **Fases:** trabalhar uma fase por vez. Só avançar quando o critério de aceite da fase atual for cumprido.
4. **Comunicação:** explicar decisões em linguagem simples e acessível, como mentor de iniciantes.
5. **Sem código manual:** o objetivo é guiar por prompts. Não escrever o app inteiro — construir é função das ferramentas de vibe coding.
