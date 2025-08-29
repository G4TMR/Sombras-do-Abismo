// Sistema de Criação de Fichas - Sombras do Abismo - VERSÃO CORRIGIDA
let currentCharacter = {
    class: '',
    attributes: {
        vida: 12,
        defesa: 8,
        pa: 5
    },
    personal: {
        nome: '',
        jogador: '',
        aparencia: '',
        personalidade: '',
        historia: '',
        objetivo: ''
    }
};

const maxPoints = {
    vida: 25,
    defesa: 20,
    pa: 10
};

const minPoints = {
    vida: 6,
    defesa: 4,
    pa: 1
};

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('criar-agente.html')) {
        initCharacterCreator();
    }
    
    if (window.location.pathname.includes('agentes.html')) {
        initCharacterDisplay();
    }
    
    updateActiveNavLinks();
});

function initCharacterCreator() {
    setupStepNavigation();
    setupClassSelection();
    setupAttributeControls();
    setupFormListeners();
    setupWizardButtons();
    updateAttributeBars();
    updateCharacterSummary();
}

// NAVEGAÇÃO ENTRE ETAPAS - CORRIGIDA
function setupStepNavigation() {
    // Todos os itens de navegação
    const allNavItems = document.querySelectorAll('.step-item');
    
    allNavItems.forEach(item => {
        item.addEventListener('click', function() {
            const stepNumber = getStepNumberFromId(item.id);
            if (stepNumber) {
                goToStep(stepNumber);
            }
        });
    });
}

function getStepNumberFromId(id) {
    if (id.includes('step-1')) return 1;
    if (id.includes('step-2')) return 2;
    if (id.includes('step-3')) return 3;
    return null;
}

function goToStep(stepNumber) {
    console.log('Navegando para etapa:', stepNumber);
    
    // Remove active de todas as seções
    const allSections = document.querySelectorAll('.full-screen-section');
    allSections.forEach(section => {
        section.classList.remove('active-section');
    });
    
    // Remove active de todos os nav items
    const allNavItems = document.querySelectorAll('.step-item');
    allNavItems.forEach(nav => {
        nav.classList.remove('active');
    });
    
    // Ativa a seção correta
    const targetSection = document.getElementById(`step-${stepNumber}`);
    if (targetSection) {
        targetSection.classList.add('active-section');
    }
    
    // Ativa os nav items corretos
    allNavItems.forEach(nav => {
        if (nav.id.includes(`step-${stepNumber}`)) {
            nav.classList.add('active');
        }
    });
    
    // Restaura estado da etapa
    restoreStepState(stepNumber);
}

function restoreStepState(stepNumber) {
    if (stepNumber === 1) {
        restoreClassSelection();
    } else if (stepNumber === 2) {
        updateAttributeBars();
    } else if (stepNumber === 3) {
        restoreFormData();
        updateCharacterSummary();
    }
}

// SELEÇÃO DE CLASSE - CORRIGIDA
function setupClassSelection() {
    const classCards = document.querySelectorAll('.class-card');
    
    classCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove seleção anterior
            classCards.forEach(c => c.classList.remove('active'));
            
            // Adiciona seleção atual
            card.classList.add('active');
            
            // Salva a classe
            currentCharacter.class = card.dataset.class;
            
            // Ajusta atributos base
            setClassBaseAttributes(card.dataset.class);
            
            // Atualiza resumo
            updateCharacterSummary();
            
            console.log('Classe selecionada:', currentCharacter.class);
            
            // AUTO-AVANÇO: Vai automaticamente para próxima etapa após seleção
            setTimeout(() => {
                goToStep(2);
            }, 500);
        });
    });
}

function restoreClassSelection() {
    if (currentCharacter.class) {
        const classCards = document.querySelectorAll('.class-card');
        classCards.forEach(card => {
            card.classList.remove('active');
            if (card.dataset.class === currentCharacter.class) {
                card.classList.add('active');
            }
        });
    }
}

function setClassBaseAttributes(className) {
    // Valores rebalanceados para sistema RPG com dados D4, D6, D8, D10, D12, D20
    switch(className) {
        case 'Artilheiro':
            // Focado em dano à distância, vida média, defesa baixa, PA alto
            currentCharacter.attributes = { vida: 12, defesa: 8, pa: 6 };
            break;
        case 'Colosso':
            // Tank com muita vida e defesa, PA baixo
            currentCharacter.attributes = { vida: 20, defesa: 15, pa: 3 };
            break;
        case 'Arcanista':
            // Mago com vida baixa, defesa baixa, PA muito alto
            currentCharacter.attributes = { vida: 8, defesa: 6, pa: 8 };
            break;
        case 'Laminante':
            // Assassino ágil com vida média, defesa média, PA alto
            currentCharacter.attributes = { vida: 14, defesa: 10, pa: 7 };
            break;
        default:
            currentCharacter.attributes = { vida: 12, defesa: 8, pa: 5 };
    }
    updateAttributeBars();
    updateCharacterSummary();
}

// CONTROLES DE ATRIBUTOS
function setupAttributeControls() {
    const attributeGroups = document.querySelectorAll('.attribute-group');
    
    attributeGroups.forEach(group => {
        const buttons = group.querySelectorAll('.attribute-controls button');
        const attributeName = getAttributeName(group.id);
        
        if (buttons.length === 2 && attributeName) {
            const decreaseBtn = buttons[0];
            const increaseBtn = buttons[1];
            
            decreaseBtn.addEventListener('click', function() {
                changeAttribute(attributeName, -5);
            });
            
            increaseBtn.addEventListener('click', function() {
                changeAttribute(attributeName, 5);
            });
        }
    });
}

function getAttributeName(groupId) {
    const mapping = {
        'hp-group': 'vida',
        'defense-group': 'defesa',
        'pa-group': 'pa'
    };
    return mapping[groupId];
}

function changeAttribute(attributeName, change) {
    const current = currentCharacter.attributes[attributeName];
    const newValue = current + change;
    const min = minPoints[attributeName];
    const max = maxPoints[attributeName];
    
    if (newValue >= min && newValue <= max) {
        currentCharacter.attributes[attributeName] = newValue;
        updateAttributeBars();
        updateCharacterSummary();
    }
}

// Sistema de dados e crítico para futuro uso
function rollDice(sides) {
    return Math.floor(Math.random() * sides) + 1;
}

function calculateCriticalDamage(baseDamage) {
    return Math.floor(baseDamage * 1.5);
}

function rollAttack(diceType, quantity = 1, modifier = 0) {
    let total = 0;
    for (let i = 0; i < quantity; i++) {
        total += rollDice(diceType);
    }
    return total + modifier;
}

function updateAttributeBars() {
    const attributes = currentCharacter.attributes;
    
    updateBar('hp-bar', 'hp-group', attributes.vida, maxPoints.vida);
    updateBar('defense-bar', 'defense-group', attributes.defesa, maxPoints.defesa);
    updateBar('pa-bar', 'pa-group', attributes.pa, maxPoints.pa);
}

function updateBar(barId, groupId, value, maxValue) {
    const bar = document.getElementById(barId);
    const group = document.getElementById(groupId);
    const valueSpan = group?.querySelector('.attribute-value');
    
    if (bar && valueSpan) {
        const percentage = (value / maxValue) * 100;
        bar.style.width = `${percentage}%`;
        valueSpan.textContent = value;
    }
}

// FORMULÁRIO DE PERSONALIZAÇÃO
function setupFormListeners() {
    const fields = {
        'char-name': 'nome',
        'player-name': 'jogador',
        'char-appearance': 'aparencia',
        'char-personality': 'personalidade',
        'char-background': 'historia',
        'char-objective': 'objetivo'
    };

    Object.entries(fields).forEach(([fieldId, property]) => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('input', function(e) {
                currentCharacter.personal[property] = e.target.value;
                updateCharacterSummary();
            });
        }
    });
}

function restoreFormData() {
    const fields = {
        'char-name': 'nome',
        'player-name': 'jogador',
        'char-appearance': 'aparencia',
        'char-personality': 'personalidade',
        'char-background': 'historia',
        'char-objective': 'objetivo'
    };

    Object.entries(fields).forEach(([fieldId, property]) => {
        const field = document.getElementById(fieldId);
        if (field && currentCharacter.personal[property]) {
            field.value = currentCharacter.personal[property];
        }
    });
}

function updateCharacterSummary() {
    const summaryClass = document.getElementById('summary-class');
    const summaryVida = document.getElementById('summary-vida');
    const summaryDefesa = document.getElementById('summary-defesa');
    const summaryPa = document.getElementById('summary-pa');

    if (summaryClass) {
        summaryClass.textContent = currentCharacter.class || 'Não selecionada';
    }
    if (summaryVida) {
        summaryVida.textContent = currentCharacter.attributes.vida;
    }
    if (summaryDefesa) {
        summaryDefesa.textContent = currentCharacter.attributes.defesa;
    }
    if (summaryPa) {
        summaryPa.textContent = currentCharacter.attributes.pa;
    }
}

// BOTÕES DO WIZARD
function setupWizardButtons() {
    const backToClassBtn = document.getElementById('back-to-class');
    const nextToCustomizeBtn = document.getElementById('next-to-customize');
    const backToAttributesBtn = document.getElementById('back-to-attributes');
    const finishWizardBtn = document.getElementById('finish-wizard');

    if (backToClassBtn) {
        backToClassBtn.addEventListener('click', () => goToStep(1));
    }

    if (nextToCustomizeBtn) {
        nextToCustomizeBtn.addEventListener('click', () => goToStep(3));
    }

    if (backToAttributesBtn) {
        backToAttributesBtn.addEventListener('click', () => goToStep(2));
    }

    if (finishWizardBtn) {
        finishWizardBtn.addEventListener('click', finishCharacterCreation);
    }
}

function finishCharacterCreation() {
    // Validação
    if (!currentCharacter.class) {
        alert('Por favor, selecione uma classe para seu agente.');
        goToStep(1);
        return;
    }

    if (!currentCharacter.personal.nome.trim()) {
        alert('Por favor, digite o nome do seu agente.');
        goToStep(3);
        return;
    }

    // Salva o personagem
    saveCharacter();
    
    alert(`Agente "${currentCharacter.personal.nome}" criado com sucesso!`);
    window.location.href = 'agentes.html';
}

function saveCharacter() {
    currentCharacter.createdAt = new Date().toISOString();
    currentCharacter.id = Date.now().toString();

    const existingCharacters = JSON.parse(localStorage.getItem('sombras-characters') || '[]');
    existingCharacters.push(currentCharacter);
    localStorage.setItem('sombras-characters', JSON.stringify(existingCharacters));
}

// SISTEMA DE EXIBIÇÃO DE PERSONAGENS
function initCharacterDisplay() {
    loadCharacters();
}

function loadCharacters() {
    const characters = JSON.parse(localStorage.getItem('sombras-characters') || '[]');
    const container = document.querySelector('.agentes-content');
    
    if (!container) return;

    if (characters.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <p class="empty-message">Nenhum agente criado ainda.</p>
                <p class="empty-submessage">Crie sua primeira ficha para vê-la aqui!</p>
                <a href="criar-agente.html" class="create-character-btn">Criar Primeiro Agente</a>
            </div>
        `;
    } else {
        const charactersHTML = characters.map(char => createCharacterCard(char)).join('');
        container.innerHTML = `
            <div class="characters-grid">
                ${charactersHTML}
            </div>
        `;
        
        setupCharacterActions();
    }
}

function createCharacterCard(character) {
    const createdDate = new Date(character.createdAt).toLocaleDateString('pt-BR');
    
    return `
        <div class="character-card" data-id="${character.id}">
            <div class="character-header">
                <h3>${character.personal.nome || 'Sem Nome'}</h3>
                <span class="character-class">${character.class}</span>
            </div>
            <div class="character-info">
                <p><strong>Jogador:</strong> ${character.personal.jogador || 'Não informado'}</p>
                <p><strong>Aparência:</strong> ${character.personal.aparencia ? character.personal.aparencia.substring(0, 50) + '...' : 'Não informado'}</p>
            </div>
            <div class="character-attributes">
                <div class="attr-item">
                    <span class="attr-icon">❤️</span>
                    <span>Vida: ${character.attributes.vida}</span>
                </div>
                <div class="attr-item">
                    <span class="attr-icon">🛡️</span>
                    <span>Defesa: ${character.attributes.defesa}</span>
                </div>
                <div class="attr-item">
                    <span class="attr-icon">⚡</span>
                    <span>PA: ${character.attributes.pa}</span>
                </div>
            </div>
            <div class="character-footer">
                <span class="created-date">Criado em ${createdDate}</span>
                <div class="character-actions">
                    <button class="view-btn" data-id="${character.id}">Ver Detalhes</button>
                    <button class="delete-btn" data-id="${character.id}">Excluir</button>
                </div>
            </div>
        </div>
    `;
}

function setupCharacterActions() {
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const characterId = e.target.dataset.id;
            // Agora "Ver Detalhes" redireciona para a ficha do personagem
            window.location.href = `ficha-personagem.html?id=${characterId}`;
        });
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const characterId = e.target.dataset.id;
            deleteCharacter(characterId);
        });
    });
}

// Função removida - agora "Ver Detalhes" redireciona diretamente para a ficha
// A funcionalidade foi movida para setupCharacterActions()

function deleteCharacter(characterId) {
    if (confirm('Tem certeza que deseja excluir este agente? Esta ação não pode ser desfeita.')) {
        let characters = JSON.parse(localStorage.getItem('sombras-characters') || '[]');
        characters = characters.filter(char => char.id !== characterId);
        localStorage.setItem('sombras-characters', JSON.stringify(characters));
        loadCharacters();
    }
}

// NAVEGAÇÃO ATIVA
function updateActiveNavLinks() {
    const navLinks = document.querySelectorAll('.home-header nav a');
    const currentPage = window.location.pathname.split('/').pop().toLowerCase();
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop().toLowerCase();
        link.classList.remove('active-link');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'home.html') ||
            (currentPage === 'index.html' && linkPage === 'home.html') ||
            (currentPage === 'criar-agente.html' && linkPage === 'agentes.html')) {
            link.classList.add('active-link');
        }
    });
}