# Design: Ciclo Completo SPEC → PLAN → BUILD → TEST → REVIEW → SHIP

> **Data:** 2026-09-11
> **Projeto:** Minhas Finanças (App de Organização de Finanças Pessoais)
> **Status:** Aprovado

---

## 1. Contexto

Projeto de Vibe Coding para a DIO: um app de finanças pessoais construído por conversa com IA. O repositório já contém PRD.md, ARCHITECTURE.md e 7 prompts de fase prontos. Nenhum código de app foi gerado ainda.

## 2. Objetivo

Executar o ciclo completo de desenvolvimento:
```
SPEC → PLAN → BUILD → TEST → REVIEW → SHIP
```

## 3. Ferramentas

| Ferramenta | Papel |
|------------|-------|
| **Lovable** | Gerar o app fase a fase com preview visual instantâneo |
| **Copilot (VS Code)** | Ajustes finos de lógica, validação e estilo |
| **Git** | Versionamento e controle de progresso |
| **Dashboard Web** | Painel interativo para guiar o ciclo (HTML/CSS/JS puro) |

## 4. Fluxo por Fase

```
┌─────────────────────────────────────────────────────────┐
│  Para cada uma das 7 fases:                             │
│                                                         │
│  1. Copiar prompt da fase (prompts/fase-N-*.md)         │
│  2. Colar no Lovable → gerar a fase                     │
│  3. Testar visual no preview do Lovable                  │
│  4. Se precisar de ajustes → Copilot (VS Code)          │
│  5. Testar critérios de aceite da fase                   │
│  6. Revisar código gerado                                │
│  7. Commit no Git                                        │
│  8. Avançar para próxima fase                            │
└─────────────────────────────────────────────────────────┘
```

## 5. Fases do Projeto

| Fase | Nome | Camada | Entregável |
|------|------|--------|------------|
| 0 | Base | Interface | Esqueleto visual (título, saldo, chat) |
| 1 | Chat | Inteligência | Registro de transações por conversa |
| 2 | Classificação | Inteligência + Regras | Categorização automática e lista |
| 3 | Saldo | Regras | Cálculo do mês e respostas no chat |
| 4 | Agente | Inteligência | Metas, dicas e comemorações |
| 5 | Dashboard | Interface + Regras | Relatórios visuais |
| 6 | Persistência | Dados | localStorage, validações e polimento |

## 5.1 Dashboard Interativo (Guia do Ciclo)

Página web em `dashboard/` com HTML/CSS/JS puro que guia o ciclo de desenvolvimento:

- **Título:** "Minhas Finanças — Ciclo de Desenvolvimento"
- **7 cards de fase** com status (pendente/em andamento/concluída)
- **Checklist por fase** (os critérios de aceite do PRD)
- **Prompt de cada fase** expansível (copiar com 1 clique)
- **Botão "Avançar para próxima fase"** (só habilita quando checklist completo)
- **Barra de progresso** no topo
- **Footer:** "@2026 - Pedro Zeferino da Silva"

## 6. Critérios de Sucesso

- Cada fase passa em seus critérios de aceite antes de avançar
- App funciona no navegador (desktop e mobile)
- Todos os dados persistem no localStorage
- Código revisado e commitado após cada fase
- App final deployado (Vercel ou similar)

## 7. Riscos e Mitigações

| Risco | Mitigação |
|-------|-----------|
| Lovable gera código com erros | Usar Copilot para ajustar |
| Fase depende de anterior quebrada | Não avançar sem corrigir |
| App não funciona em mobile | Testar responsividade em cada fase |
| Dados se perdem ao recarregar | Fase 6 garante localStorage |

## 8. Ordem de Execução

1. **SPEC** — PRD e Arquitetura já prontos (este doc confirma)
2. **PLAN** — Criar plano detalhado por fase (writing-plans)
3. **BUILD** — Executar fases 0-6 com Lovable + Copilot
4. **TEST** — Validar critérios de aceite de cada fase
5. **REVIEW** — Revisar código gerado
6. **SHIP** — Deploy do app final
