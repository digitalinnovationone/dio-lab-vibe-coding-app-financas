# 🤝 Guia de Contribuição — ChatMoney

Obrigado por considerar contribuir para o **ChatMoney**! Este guia ajudará você a entender como participar do projeto.

---

## 📋 Índice
- [Código de Conduta](#código-de-conduta)
- [Como Começar](#como-começar)
- [Tipos de Contribuição](#tipos-de-contribuição)
- [Processo de Desenvolvimento](#processo-de-desenvolvimento)
- [Checklist para Pull Requests](#checklist-para-pull-requests)
- [Diretrizes de Estilo](#diretrizes-de-estilo)
- [Perguntas?](#perguntas)

---

## 💜 Código de Conduta

### Nossa Promessa
Estamos comprometidos em manter um espaço inclusivo e respeitoso. Todas as contribuições devem:

- ✅ **Respeitar a diversidade** — gênero, identidade, origem, deficiência, experiência
- ✅ **Ser construtivas** — feedback técnico sem agressividade
- ✅ **Incluir pessoas** — comentários acessíveis, evitar jargão desnecessário
- ✅ **Acolher iniciantes** — paciência com quem está aprendendo

### Comportamentos Inaceitáveis
- Assédio, discriminação ou linguagem ofensiva
- Ataques pessoais
- Spam ou self-promotion agressiva
- Desrespeito com contribuidores

### Denúncias
Comportamentos inaceitáveis podem ser reportados para: [adicionar email do projeto]

---

## 🚀 Como Começar

### 1. **Prepare o Ambiente Local**

```bash
# Clone o repositório
git clone https://github.com/neurionaisolutions/dio-lab-vibe-coding-app-chatmoney-pia-08-2026-alessandro.git

# Entre na pasta
cd dio-lab-vibe-coding-app-chatmoney-pia-08-2026-alessandro

# (Se houver código/dependências — adapte ao seu stack)
# npm install
# yarn install
```

### 2. **Explore a Estrutura**

```
.
├── README.md                    # Visão geral do projeto
├── docs/
│   ├── PRD_COMPLETO.md         # Documento de requisitos completo
│   ├── CONTRIBUTING.md         # Este arquivo
│   ├── PROCESS.md              # Processo de desenvolvimento
│   └── assets/                 # Imagens e screenshots
├── LICENSE                      # MIT License
└── [código-fonte-quando-disponível]
```

### 3. **Crie uma Branch**

```bash
# Sempre partir de main
git checkout main
git pull origin main

# Crie uma branch descritiva
git checkout -b feature/sua-feature
# ou
git checkout -b fix/seu-bug
# ou
git checkout -b docs/sua-melhoria-docs
```

---

## 📝 Tipos de Contribuição

### 🐛 **Reportar Bugs**
Encontrou um problema? Abra uma **issue** descrevendo:

```markdown
## Descrição
[Descreva o bug em detalhes]

## Passos para Reproduzir
1. ...
2. ...

## Comportamento Esperado
[O que deveria acontecer]

## Comportamento Atual
[O que realmente acontece]

## Ambiente
- Navegador/SO: 
- Versão: 
- Há quanto tempo ocorre:

## Screenshots/Logs
[Adicione se relevante]
```

### 💡 **Sugerir Features**
Tenha uma ideia? Abra uma **issue** com a tag `enhancement`:

```markdown
## Descrição
[Descreva a funcionalidade desejada]

## Caso de Uso
[Por que isso é importante? Quem precisa?]

## Alinhamento com Premissas
[Como se conecta com os objetivos do ChatMoney?]

## Exemplos de Implementação
[Sugestões opcionais]
```

### 📚 **Melhorar Documentação**
Documentação é crucial! Você pode:

- ✅ Corrigir typos
- ✅ Expandir explicações
- ✅ Adicionar exemplos
- ✅ Melhorar clareza e acessibilidade (linguagem simples)
- ✅ Traduzir documentação

### 🎨 **Contribuições de Design/UX**
- Mockups de novas telas
- Sugestões de acessibilidade
- Melhorias visuais
- Assets (ícones, ilustrações)

### 💻 **Contribuições de Código**
- Features alinhadas com o PRD
- Correção de bugs
- Melhorias de performance
- Testes automatizados
- Refatoração

---

## 🔄 Processo de Desenvolvimento

### **Fluxo Git**

```
main (sempre estável)
  ↑
  └── feature/xxx → Pull Request → Code Review → Merge
```

### **Passos**

1. **Crie uma feature branch**
   ```bash
   git checkout -b feature/nome-da-feature
   ```

2. **Faça commits descritivos**
   ```bash
   git commit -m "feat: adicionar registro de transações via chat"
   # ou
   git commit -m "fix: corrigir categorização de gastos"
   # ou
   git commit -m "docs: melhorar guia de acessibilidade"
   ```

3. **Push para o repositório**
   ```bash
   git push origin feature/nome-da-feature
   ```

4. **Abra um Pull Request (PR)**
   - Compare `feature/xxx` → `main`
   - Descreva as mudanças (veja template abaixo)
   - Referencie issues relacionadas: `Closes #123`

5. **Aguarde revisão**
   - Mantenha-se responsivo a feedback
   - Faça ajustes conforme solicitado
   - Mergeie quando aprovado

### **Convenção de Commits**

Use o padrão [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<escopo>): <descrição>

<corpo (opcional)>

<rodapé (opcional)>
```

**Tipos válidos**:
- `feat` — nova funcionalidade
- `fix` — correção de bug
- `docs` — mudanças na documentação
- `style` — formatação, sem mudanças lógicas
- `refactor` — refatoração sem mudanças de funcionalidade
- `perf` — melhoria de performance
- `test` — adição/modificação de testes
- `chore` — mudanças de build, dependências, etc

**Exemplos**:
```
feat(chat): adicionar suporte a entrada de voz
fix(categorizacao): corrigir classificação de "Uber"
docs(acessibilidade): expandir guia WCAG
```

---

## ✅ Checklist para Pull Requests

Antes de submeter seu PR, verifique:

### 📝 **Descrição**
- [ ] Título claro e descritivo (40-50 caracteres)
- [ ] Descrição detalhada do que foi mudado e por quê
- [ ] Referência a issues relacionadas (`Closes #123`)
- [ ] Screenshots/GIFs se for mudança visual

### 🧪 **Qualidade do Código**
- [ ] Código segue o estilo do projeto
- [ ] Sem código comentado ou "console.log()"
- [ ] Variáveis e funções têm nomes descritivos
- [ ] Funciona localmente sem erros

### ♿ **Acessibilidade**
- [ ] Imagens têm alt text
- [ ] Elementos interativos têm label/aria-label
- [ ] Contraste de cores é adequado (WCAG AA)
- [ ] Navegação por teclado funciona

### 📚 **Documentação**
- [ ] README atualizado (se necessário)
- [ ] Comentários explicam lógica complexa
- [ ] Novo recurso documentado

### 🔒 **Segurança**
- [ ] Sem hardcoding de senhas/tokens
- [ ] Entrada de usuário validada
- [ ] Sem vulnerabilidades óbvias

### ✨ **Testes** (quando aplicável)
- [ ] Testes novos/atualizados cobrem mudanças
- [ ] Testes passam localmente

---

## 🎨 Diretrizes de Estilo

### **Linguagem & Ton of Voice**
- ✅ Simples e acessível (evite jargão)
- ✅ Amigável (como conversa com amigo)
- ✅ Inclusivo (considere públicos diversos)
- ✅ Português claro (sem regionalismos confusos)

**Exemplo Ruim**: "Necessário input de transação com parametrização de categoria."

**Exemplo Bom**: "Registre seus gastos falando ou escrevendo naturalmente."

### **Código** (quando houver)
- Siga a convenção do framework/linguagem
- Use linting (ESLint, Prettier, etc)
- Máximo 80-100 caracteres por linha
- Indentação: 2 espaços (ou conforme o projeto)

### **Documentação**
- Markdown bem formatado
- Títulos hierárquicos consistentes (H2 > H3 > H4)
- Listas e tabelas para melhor legibilidade
- Exemplos quando possível

### **Comentários no Código**
```javascript
// ❌ Ruim — óbvio demais
i++; // incrementa i

// ✅ Bom — explica o por quê
// Incrementa contador para rastrear iterações do loop principal
i++;

// ✅ Ótimo — para lógica complexa
// Algoritmo: Se gasto > 80% da meta de categoria, alerta o usuário
if (gastoMes > metaCategoria * 0.8) {
  piaSugeridAlerta(usuario, categoria);
}
```

---

## 💬 Perguntas?

### Não sabe por onde começar?
- Procure por issues com a tag `good first issue`
- Pergunte nos comentários da issue antes de começar

### Precisa de ajuda?
- Abra uma discussão em "Discussions"
- Envie uma mensagem para [adicionar contato]

### Não concorda com algo?
- Abra uma issue para discutir
- Respectosamente, apresente seu ponto de vista
- Estamos abertos a feedback

---

## 🙏 Agradecimentos

Obrigado por dedicar tempo para melhorar o ChatMoney! Cada contribuição — grande ou pequena — faz diferença.

Seu nome será adicionado ao [CONTRIBUTORS.md](CONTRIBUTORS.md) (quando criado).

---

**Última atualização**: 21/08/2026  
**Versão**: 1.0

🎯 **Lembre-se**: O objetivo final é criar um app que sirva a **todas as pessoas**, independentemente de experiência, habilidade ou deficiência. Contribua com isso em mente!
