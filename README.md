# 💸 App de Organização de Finanças Pessoais com Vibe Coding

[[Deploy](https://img.shields.io/badge/Deploy-minty--my--wallet-22C55E?style=for-the-badge)](https://minty-my-wallet.lovable.app)
[[Preview DIO](https://img.shields.io/badge/Preview%20Banca-DIO-3B82F6?style=for-the-badge)](https://lovable.dev/preview/sw6ObcnuplN3DPfOaYa8RnpLDbn2krz2)

Aplicativo de organização de finanças pessoais que funcione por meio de conversas em linguagem natural.  
O objetivo é tornar o controle financeiro mais intuitivo, acessível e livre de burocracias como planilhas ou formulários complexos.
Aplicativo criado com uso de ferramentas como o **Copilot** e o **Lovable** com uma comunicação simples e natural para, acima de tudo, aprender o **jeito Vibe de programar com IA**.

> [!IMPORTANT]
> O foco está em **usar a IA como parceira criativa**, transformando boas ideias e prompts em conceitos funcionais que simulam um produto real.

## ✨ O que é Vibe Coding

**Vibe Coding** é uma forma leve e criativa de desenvolver com IA, baseada em **conversas naturais e bem estruturadas**. Em vez de escrever código linha por linha, **guia-se a IA** descrevendo suas ideias de forma clara, com **intenção e contexto** para criar o código.

> Você mostra a vibe da sua ideia e a IA transforma em solução (ou em um caminho para ela).

--- 

## 🎯 Desafio

Problema: Muitas pessoas não conseguem manter um controle financeiro porque os aplicativos exigem muita entrada de dados manual, e a criação de orçamentos é vista como algo tedioso. 

---
## 🔗 Links do Projeto

- **Template base de referência (DIO):** https://conversa-fin-amigo.lovable.app
- **Meu projeto publicado (Produção):** https://minty-my-wallet.lovable.app
- **Link de prévia para avaliação (Read-Only):** https://lovable.dev/preview/sw6ObcnuplN3DPfOaYa8RnpLDbn2krz2

> Link de prévia é read-only com comentários habilitados. Não permite edição de código nem consumo de créditos.

---
## Funcionalidades 

Segue as funcionalidades criadas por outros desenvolvedores e as minhas funcionalidades contribuitivas.  

### 🔍 Funcionalidades Criadas (Base - Template conversa-fin-amigo.lovable.app)
1. **Dashboard Financeiro**
    - Receitas: Total de ganhos registrados
    - Despesas: Total de gastos
    - Saldo: Diferença entre receitas e despesas
    - Interface simples e direta para facilitar a compreensão

2. **Assistente Financeiro**
    - Personagem conversacional que interage com o usuário
    - Incentiva a conexão de contas e cartões para uma visão completa das finanças
    - Oferece suporte emocional e motivacional

3. **Registro de Transações via Chat**
    - Campo de entrada para o usuário digitar mensagens em linguagem natural
    - Permite registrar gastos e interagir com o assistente de forma fluida

4. **Metas Financeiras**
    - Área dedicada à criação e acompanhamento de objetivos financeiros
    - Sugestão proativa para o usuário definir metas
    - Botão de ação para adicionar novas metas

5. **Relatórios Personalizados**
    - Visualizações simples e adaptadas ao estilo do usuário
    - Acompanhamento de metas e progresso financeiro

6. **Design Universal**
    - Interface acessível e inclusiva:
        - Linguagem simples
        - Navegação clara
        - Compatibilidade com leitores de tela e comandos por voz
        - Feedbacks visuais e auditivos para facilitar o uso

### 🚀 Minhas funcionalidades - Contribuição Autoral (Golbery Santos)

#### 7. Cofrinhos Inteligentes (Smart Pockets) - Bounded Context `Savings`

**Problema que resolve:** Metas financeiras abstratas ("economizar R$500") não geram engajamento. Usuários abandonam por falta de visualização.

**Solução:** Evolução do conceito de Metas para **Envelopes Visuais Gamificados** inspirados no método de envelopes.

**Implementação Técnica:**
- **DDD:** Novo Aggregate Root `Cofrinho` com Value Objects `Dinheiro` e `Progresso`. Invariante: `atual <= meta`. Desacoplado de `Transaction` para evitar Big Ball of Mud.
- **Estrutura de pastas:**
  ```
  /src
    /types/cofrinho.ts
    /hooks/useCofrinhos.ts
    /components/cofrinhos/
      CofrinhoCard.tsx
      NovoCofrinhoDialog.tsx
      CofrinhosEmpty.tsx
      CofrinhosGrid.tsx
    /pages/Cofrinhos.tsx
  ```
- **Design System Fiel:** Extraí a paleta da referência (print `Minha Carteira`): Background `#F8FBF9`, Cards `bg-white rounded-xl border-slate-200`, Primary `#22C55E` (botão Nova Meta), Despesa `#EF4444`. Trava obrigatória de `shadcn/ui` (Card, Button, Progress, Dialog) para manter consistência visual e WCAG AA.
- **Integração com Chat Natural (Vibe Coding):** Nova intenção `ALLOCATE_SAVING` no parser. Regex `/(guardei|guardar)\s*R?\$?\s*(\d+)\s*para\s*([a-z]+)/i` permite "guardei R$50 para viagem" → aloca no cofrinho correspondente + toast animado + Progress anima.
- **Stack:** React + TypeScript + Tailwind + shadcn/ui, lucide-react, sem libs extras.
- **Persistência:** `localStorage` key `smart_pockets_v1`

**Como testar no deploy:**
1. Acesse https://minty-my-wallet.lovable.app
2. Vá em "Meus Cofrinhos" > "Novo Cofrinho" > Crie "Viagem Europa" com meta R$1000
3. No Assistente Financeiro digite: `guardei R$50 para viagem`
4. Veja o toast "R$50 guardado no cofrinho Viagem Europa! 🏦" e a barra de progresso animar para 5%

---

## 🧠 Reflexão

### O que funcionou bem?
1. **Travar Design System no prompt:** Ao extrair os hex exatos da print (#F8FBF9, #22C55E) e obrigar o uso de `shadcn/ui` (`@/components/ui/card`, `button`, `progress`), o Lovable gerou a feature 100% consistente com o template original em apenas 1 interação, sem inventar cores ou divs custom.
2. **Abordagem por Bounded Context:** Criar um contexto `Savings` separado de `Transactions` evitou acoplar lógica no Dashboard e preveniu o anti-pattern God Component. Facilitou testes e manutenção.
3. **Vibe Coding Estruturado:** Usar formato Contexto > Design System > Regras Técnicas > User Flow > Critérios de Aceite fez a IA entender intenção e não só UI.
4. **Integração Chat + Domínio:** A intenção `ALLOCATE_SAVING` mostrou o poder da linguagem natural - o usuário não precisa sair do chat para guardar dinheiro, mantendo o princípio do PRD de "livre de burocracias".
5. **Validação 5/5:** Dashboard, botão com #22C55E, rota /cofrinhos, empty state e chat com alocação funcionando.

### O que não funcionou como o esperado?
1. **Acesso ao template base:** Tentei editar diretamente `conversa-fin-amigo.lovable.app`, mas é apenas uma vitrine pública (read-only). É política de segurança do Lovable (LIVE_CRAWL_POLICY_BLOCKED). Tive que recriar o MVP base no meu Lovable pessoal usando a print como Style Reference.
2. **Parser de linguagem natural inicial:** Na primeira iteração, o Lovable entendeu "guarde R$50 para viagem" como despesa e não como alocação. Tive que refinar o regex e adicionar exemplos few-shot no prompt ("Ex: 'guardei 20 para casa' → alocação").
3. **Cor do Progress:** O componente `Progress` do shadcn vem com `bg-primary` padrão. Tive que forçar `indicatorClassName="bg-[#22C55E]"` para manter a consistência com o botão "Nova Meta", senão ficava com tonalidade diferente.
4. **Compartilhamento:** Descobri que existem 2 links - o de produção `minty-my-wallet.lovable.app` e o de prévia `lovable.dev/preview/...`. O de prévia é o correto para banca pois é read-only com comentários, não permite edição.

### O que aprendi sobre conversar com IAs?
Aprendi que Vibe Coding não é "prompt solto e torcer". É **arquitetura por prompt**:
- **Restrição gera criatividade:** Quanto mais restritivo (use apenas shadcn, use apenas #22C55E, não crie divs custom), mais consistente e profissional a IA entrega dentro do Design System.
- **Falar como Tech Lead:** Definir Bounded Context, contratos TypeScript (`type Cofrinho`), storage key e critérios de aceite evita que a IA gere código anêmico ou Big Ball of Mud.
- **Imagem como prompt:** Anexar a print de referência vale mais que 100 linhas descrevendo cor. O Lovable entende visualmente o `rounded-xl`, `border-slate-200` e `shadow-sm`.
- **Iteração é design:** O primeiro output nunca é o final. É preciso testar a usabilidade (ex: digitar "guardei R$30") e voltar com feedback cirúrgico, igual faria com um dev junior.

## 🛠️ Como rodar local (se exportar do Lovable)
```bash
npm install
npm run dev
```

## 📁 Código da Feature (para banca avaliar arquitetura)
Os arquivos da feature estão em `/src` neste repositório, seguindo a convenção:
- `types/cofrinho.ts` - Domain Model (DDD)
- `hooks/useCofrinhos.ts` - Application Layer (use cases + parser chat)
- `components/cofrinhos/` - UI Layer (shadcn/ui travado)
