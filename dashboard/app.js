const DEFAULT_PHASES = [
    {
        id: 0,
        name: "Base",
        layer: "Interface",
        description: "Esqueleto visual — título, cartão de saldo, chat com mensagem de boas-vindas.",
        prompt: `Vou construir o app "Minhas Finanças", um controle de gastos por conversa.
Guarde estas informações:

- O usuário conversa com um "Agente Financeiro" em linguagem natural, por exemplo:
  "gastei 50 no mercado" ou "recebi 3500 de salário"
- Cada mensagem que o agente entende como transação cria um lançamento com:
  descrição, valor, tipo (receita ou despesa), data e categoria
- O app mostra saldo do mês, lista de transações, metas e relatórios
- Os dados ficam salvos no navegador mesmo ao recarregar a página
- Visual simples, limpo e moderno, tudo em português

Comece criando a tela principal com:
- Título "Minhas Finanças" no topo
- Cartão "Saldo do mês" (pode começar zerado)
- Uma área de conversa com a mensagem de boas-vindas do agente:
  "Olá! Eu sou seu assistente financeiro. Diga, por exemplo:
  'gastei 50 no mercado' e eu anoto para você."
- Campo de texto para digitar a mensagem e botão de enviar (verde, redondo, no canto)`,
        checklist: [
            "A tela mostra o título 'Minhas Finanças'",
            "O cartão de saldo aparece (zerado)",
            "A mensagem de boas-vindas do agente aparece",
            "Campo de texto + botão de enviar visíveis",
            "Tudo em português"
        ]
    },
    {
        id: 1,
        name: "Chat",
        layer: "Inteligência",
        description: "Registro de transações via conversa em linguagem natural.",
        prompt: `Agora vou fazer a conversa registrar transações de verdade.

Quando o usuário enviar mensagens como:
- "gastei 50 no mercado" → despesa de R$ 50,00, descrição "Mercado"
- "recebi 3500 de salário" → receita de R$ 3.500,00, descrição "Salário"
- "paguei 900 de aluguel" → despesa de R$ 900,00, descrição "Aluguel"

O agente deve:
1. Entender o valor (aceite também "50 reais", "R$ 50", "cinquenta")
2. Entender se é receita ou despesa pelas palavras (gastei/paguei = despesa; recebi = receita)
3. Pedir confirmação antes de salvar quando estiver em dúvida:
   "Anotei: despesa de R$ 50,00 — Mercado. Confirmar?" com botões Confirmar e Editar
4. Após confirmar, responder de forma amigável:
   "Anotado! Despesa de R$ 50,00 registrada em Mercado."
5. Se não entender, responder: "Não entendi. Me diga o que foi, o valor e se é gasto ou ganho."

A transação confirmada deve aparecer na lista de transações abaixo do chat.`,
        checklist: [
            "'gastei 50 no mercado' registra despesa de R$ 50,00",
            "'recebi 3500 de salário' registra receita de R$ 3.500,00",
            "O agente pede confirmação quando tem dúvida",
            "A resposta de confirmação é amigável e em português",
            "A transação aparece na lista",
            "Mensagem não entendida recebe resposta educada"
        ]
    },
    {
        id: 2,
        name: "Classificação",
        layer: "Inteligência + Regras",
        description: "Categorização automática por palavras-chave e lista organizada.",
        prompt: `Agora vou deixar a classificação e a lista mais inteligentes.

1. Classifique automaticamente por categoria usando palavras-chave:
   mercado/supermercado/feira/compras do mês → Alimentação
   aluguel/condomínio → Moradia
   uber/ônibus/gasolina → Transporte
   cinema/lazer → Lazer
   médico/farmácia → Saúde
   salário/freela → Salário (receita) ou Outros
   Qualquer outra → Outros

2. Ordene a lista da mais recente para a mais antiga, agrupada por dia
   (ex.: "12 de janeiro" como cabeçalho).

3. Cada item da lista mostra: descrição, categoria, valor e ícone de lixeira.
   Despesas em vermelho, receitas em verde.

4. A lixeira pergunta "Deseja excluir esta transação?" com Sim e Não.

5. Abaixo da lista, um resumo por categoria do mês atual
   (ex.: "Alimentação: R$ 350,00"), apenas categorias com lançamentos.`,
        checklist: [
            "'gastei 50 no mercado' cai em Alimentação automaticamente",
            "Lista ordenada por data com cabeçalhos de dia em português",
            "Cores: despesa vermelha, receita verde",
            "Lixeira pede confirmação",
            "Resumo por categoria correto e atualizado"
        ]
    },
    {
        id: 3,
        name: "Saldo",
        layer: "Regras",
        description: "Cálculo do saldo do mês e respostas no chat.",
        prompt: `Agora vou fazer o cartão de saldo calcular de verdade.

O cartão "Saldo do mês" deve mostrar:
- Saldo: receitas do mês atual menos despesas do mês atual
- Entradas: soma das receitas do mês (verde)
- Saídas: soma das despesas do mês (vermelho)

Regras:
- Só considerar transações do mês e ano atual
- Saldo positivo em verde, negativo em vermelho
- Formato brasileiro: R$ 1.234,56

Além disso, o agente deve responder no chat:
- "quanto gastei esse mês?" → "Você gastou R$ X neste mês."
- "qual meu saldo?" → mostra entradas, saídas e saldo`,
        checklist: [
            "Saldo = receitas − despesas do mês atual",
            "Entradas e saídas separadas no cartão",
            "Formato brasileiro nos valores",
            "O agente responde no chat sobre gastos e saldo"
        ]
    },
    {
        id: 4,
        name: "Agente",
        layer: "Inteligência",
        description: "Metas financeiras, dicas personalizadas e comemorações.",
        prompt: `Agora vou dar poder de consultor ao Agente Financeiro.

1. Metas: o usuário pode dizer "quero guardar 500 por mês" e o agente:
   - Confirma: "Meta de economia criada: R$ 500,00 por mês. Vamos lá!"
   - Mostra na tela um cartão de meta com o progresso mensal
2. Dicas: o agente analisa os gastos do mês e dá 1 dica personalizada,
   por exemplo: "Você gastou R$ 350 em Alimentação. Que tal levar marmita 2x por semana?"
3. Comemorações: se a meta foi alcançada, o agente elogia:
   "Você atingiu sua meta! Mandou bem 🎉"
4. Pergunta "como economizar?" → o agente responde com base na maior categoria de gasto.`,
        checklist: [
            "'quero guardar 500 por mês' cria a meta e confirma no chat",
            "Cartão de meta mostra o progresso",
            "As dicas citam a maior categoria de gasto",
            "O agente comemora quando a meta é atingida"
        ]
    },
    {
        id: 5,
        name: "Dashboard",
        layer: "Interface + Regras",
        description: "Relatórios visuais com gráficos de rosca e barras.",
        prompt: `Agora vou adicionar relatórios visuais.

Adicione uma barra com duas abas no topo: "Conversa" e "Dashboard".

O Dashboard deve mostrar:
1. Gráfico de rosca com despesas por categoria do mês
2. Legenda ao lado: categoria, valor e porcentagem (ex.: "Alimentação — R$ 350,00 — 45%")
3. Gráfico de barras com despesas dos últimos 6 meses
4. Cartão de destaque com a categoria campeã de gastos do mês
5. Sem despesas no mês, mostre "Nenhuma despesa neste mês"

Cores diferentes e bonitas por categoria, tudo em português.`,
        checklist: [
            "As duas abas funcionam",
            "Rosca mostra despesas por categoria do mês",
            "Legenda com nome, valor e porcentagem",
            "Barras dos últimos 6 meses",
            "Categoria campeã destacada",
            "Mensagem amigável quando não há despesas"
        ]
    },
    {
        id: 6,
        name: "Persistência",
        layer: "Dados",
        description: "localStorage, validações, responsividade e polimento final.",
        prompt: `Agora vou deixar o app completo.

1. Salve todas as transações e metas no armazenamento do navegador (localStorage).
   Ao abrir, carregue os dados salvos. Atualize tudo ao adicionar ou excluir.

2. Botão "Limpar dados" no rodapé, em cartão discreto, com confirmação:
   "Tem certeza? Esta ação não pode ser desfeita." (Apagar tudo / Cancelar)

3. Validações no chat: se o valor for zero, negativo ou maior que 1 milhão,
   o agente responde: "Esse valor não parece certo. Pode confirmar?"

4. Responsividade: no celular, tudo cabe sem cortes e o teclado não esconde o campo de texto.

5. Mensagem de confirmação no topo (toast): "Transação adicionada!" some em 3 segundos.
   Ao excluir: "Transação excluída."

6. Rodapé discreto: "Feito com vibe coding 🚀"`,
        checklist: [
            "Recarregou a página e os dados continuam",
            "'Limpar dados' pede confirmação e zera tudo",
            "Valores inválidos recebem resposta do agente",
            "Testei no celular (ou modo móvel do navegador) e tudo cabe",
            "Toasts aparecem e somem sozinhos",
            "Rodapé presente"
        ]
    }
];

let phases = JSON.parse(JSON.stringify(DEFAULT_PHASES));
let currentPhase = 0;
let completedPhases = new Set();
let checkedItems = {};
let currentEditPhase = null;

// State
function loadState() {
    try {
        const saved = localStorage.getItem('dashboard-state');
        if (saved) {
            const state = JSON.parse(saved);
            completedPhases = new Set(state.completedPhases || []);
            checkedItems = state.checkedItems || {};
            currentPhase = state.currentPhase || 0;
        }
        const savedPrompts = localStorage.getItem('dashboard-prompts');
        if (savedPrompts) {
            const custom = JSON.parse(savedPrompts);
            phases = phases.map(p => custom[p.id] ? { ...p, prompt: custom[p.id] } : p);
        }
    } catch (e) {
        console.warn('Erro ao carregar estado:', e);
    }
}

function saveState() {
    localStorage.setItem('dashboard-state', JSON.stringify({
        completedPhases: [...completedPhases],
        checkedItems,
        currentPhase
    }));
}

function savePrompts() {
    const custom = {};
    phases.forEach(p => {
        const def = DEFAULT_PHASES.find(d => d.id === p.id);
        if (def && p.prompt !== def.prompt) {
            custom[p.id] = p.prompt;
        }
    });
    localStorage.setItem('dashboard-prompts', JSON.stringify(custom));
}

function resetAll() {
    if (!confirm('Tem certeza? Isso vai apagar todo o progresso e restaurar os prompts originais.')) return;
    completedPhases = new Set();
    checkedItems = {};
    currentPhase = 0;
    phases = JSON.parse(JSON.stringify(DEFAULT_PHASES));
    localStorage.removeItem('dashboard-state');
    localStorage.removeItem('dashboard-prompts');
    renderPhases();
}

// Dark mode
function initDarkMode() {
    const saved = localStorage.getItem('dashboard-dark');
    if (saved === 'true') document.body.classList.add('dark');
}

function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('dashboard-dark', document.body.classList.contains('dark'));
}

// Render
function getPhaseStatus(phase) {
    if (completedPhases.has(phase.id)) return 'completed';
    if (phase.id === currentPhase) return 'active';
    return 'pending';
}

function updateProgress() {
    const total = phases.length;
    const completed = completedPhases.size;
    const pct = (completed / total) * 100;
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressText').textContent = `${completed} de ${total} fases concluídas`;
}

function renderPhases() {
    const grid = document.getElementById('phasesGrid');
    grid.innerHTML = '';

    phases.forEach(phase => {
        const status = getPhaseStatus(phase);
        const card = document.createElement('div');
        card.className = `phase-card ${status}`;
        card.innerHTML = `
            <div class="phase-number">${phase.id}</div>
            <div class="phase-name">${phase.name}</div>
            <div class="phase-layer">${phase.layer}</div>
            <div class="phase-description">${phase.description}</div>
            <div class="phase-status status-${status}">
                ${status === 'completed' ? '✓ Concluída' : status === 'active' ? '► Em andamento' : '○ Pendente'}
            </div>
        `;
        card.addEventListener('click', () => openModal(phase));
        grid.appendChild(card);
    });

    updateProgress();
    updateResetButton();
}

function updateResetButton() {
    const btn = document.getElementById('btnReset');
    if (completedPhases.size > 0) {
        btn.style.display = 'inline-flex';
    } else {
        btn.style.display = 'none';
    }
}

// Modal
function openModal(phase) {
    currentEditPhase = phase;
    const overlay = document.getElementById('modalOverlay');
    const title = document.getElementById('modalTitle');
    const code = document.getElementById('promptCode');
    const editArea = document.getElementById('promptEdit');
    const checklist = document.getElementById('checklist');
    const btnAdvance = document.getElementById('btnAdvance');
    const btnEdit = document.getElementById('btnEdit');
    const btnSave = document.getElementById('btnSave');
    const btnCancelEdit = document.getElementById('btnCancelEdit');

    title.textContent = `Fase ${phase.id} — ${phase.name}`;
    code.textContent = phase.prompt;
    editArea.value = phase.prompt;

    code.style.display = 'block';
    editArea.style.display = 'none';
    btnEdit.style.display = 'inline-flex';
    btnSave.style.display = 'none';
    btnCancelEdit.style.display = 'none';

    checklist.innerHTML = '';
    const items = checkedItems[phase.id] || [];
    phase.checklist.forEach((item, i) => {
        const li = document.createElement('li');
        const checked = items.includes(i);
        li.innerHTML = `
            <input type="checkbox" id="check-${phase.id}-${i}" ${checked ? 'checked' : ''}>
            <label for="check-${phase.id}-${i}">${item}</label>
        `;
        li.querySelector('input').addEventListener('change', (e) => {
            toggleCheck(phase.id, i, e.target.checked);
        });
        checklist.appendChild(li);
    });

    const isCompleted = completedPhases.has(phase.id);
    const allChecked = phase.checklist.every((_, i) => (checkedItems[phase.id] || []).includes(i));

    btnAdvance.disabled = isCompleted || !allChecked;
    btnAdvance.textContent = isCompleted ? '✓ Fase Concluída' : 'Marcar como Concluída e Avançar';
    btnAdvance.onclick = () => completePhase(phase);

    overlay.classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    currentEditPhase = null;
}

function toggleCheck(phaseId, index, checked) {
    if (!checkedItems[phaseId]) checkedItems[phaseId] = [];
    if (checked) {
        if (!checkedItems[phaseId].includes(index)) {
            checkedItems[phaseId].push(index);
        }
    } else {
        checkedItems[phaseId] = checkedItems[phaseId].filter(i => i !== index);
    }
    saveState();

    const phase = phases.find(p => p.id === phaseId);
    const allChecked = phase.checklist.every((_, i) => (checkedItems[phaseId] || []).includes(i));
    const btnAdvance = document.getElementById('btnAdvance');
    btnAdvance.disabled = completedPhases.has(phaseId) || !allChecked;
}

function completePhase(phase) {
    completedPhases.add(phase.id);
    if (phase.id < phases.length - 1) {
        currentPhase = phase.id + 1;
    }
    saveState();
    closeModal();
    renderPhases();
}

// Edit prompt
function startEdit() {
    document.getElementById('promptCode').style.display = 'none';
    document.getElementById('promptEdit').style.display = 'block';
    document.getElementById('btnEdit').style.display = 'none';
    document.getElementById('btnSave').style.display = 'inline-flex';
    document.getElementById('btnCancelEdit').style.display = 'inline-flex';
    document.getElementById('promptEdit').focus();
}

function saveEdit() {
    const newPrompt = document.getElementById('promptEdit').value;
    if (currentEditPhase) {
        const phase = phases.find(p => p.id === currentEditPhase.id);
        phase.prompt = newPrompt;
        savePrompts();
        document.getElementById('promptCode').textContent = newPrompt;
    }
    cancelEdit();
}

function cancelEdit() {
    document.getElementById('promptCode').style.display = 'block';
    document.getElementById('promptEdit').style.display = 'none';
    document.getElementById('btnEdit').style.display = 'inline-flex';
    document.getElementById('btnSave').style.display = 'none';
    document.getElementById('btnCancelEdit').style.display = 'none';
    if (currentEditPhase) {
        document.getElementById('promptEdit').value = currentEditPhase.prompt;
    }
}

// Copy
function copyPrompt() {
    const code = document.getElementById('promptCode');
    navigator.clipboard.writeText(code.textContent).then(() => {
        const btn = document.getElementById('btnCopy');
        btn.textContent = 'Copiado!';
        btn.classList.add('copied');
        setTimeout(() => {
            btn.textContent = 'Copiar Prompt';
            btn.classList.remove('copied');
        }, 2000);
    });
}

// Events
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
});
document.getElementById('btnCopy').addEventListener('click', copyPrompt);
document.getElementById('btnDarkMode').addEventListener('click', toggleDarkMode);
document.getElementById('btnEdit').addEventListener('click', startEdit);
document.getElementById('btnSave').addEventListener('click', saveEdit);
document.getElementById('btnCancelEdit').addEventListener('click', cancelEdit);
document.getElementById('btnReset').addEventListener('click', resetAll);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

initDarkMode();
loadState();
renderPhases();
