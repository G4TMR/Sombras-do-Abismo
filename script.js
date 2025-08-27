document.addEventListener('DOMContentLoaded', () => {
    const classCards = document.querySelectorAll('.class-card');
    const sections = document.querySelectorAll('.full-screen-section');
    const stepItems = document.querySelectorAll('.step-navigation .step-item');
    
    const attributes = {
        Artilheiro: { hp: 100, defense: 5, special: { name: 'Precisão', value: 0 }, pa: 15 },
        Colosso: { hp: 150, defense: 20, special: { name: 'Baluarte', value: 0 }, pa: 10 },
        Arcanista: { hp: 80, defense: 5, special: { name: 'Energia Mística', value: 0 }, pa: 20 },
        Laminante: { hp: 90, defense: 10, special: { name: 'Agilidade Fatal', value: 0 }, pa: 25 }
    };

    const hpValue = document.getElementById('hp-value');
    const paValue = document.getElementById('pa-value');
    const defenseValue = document.getElementById('defense-value');
    const classAttributeLabel = document.getElementById('class-attribute-label');
    const classAttributeValue = document.getElementById('class-attribute-value');

    const hpBar = document.getElementById('hp-bar');
    const paBar = document.getElementById('pa-bar');
    const defenseBar = document.getElementById('defense-bar');
    const classAttributeBar = document.getElementById('class-attribute-bar');

    const pointsToDistribute = document.getElementById('points-to-distribute-value');
    const plusButtons = document.querySelectorAll('.attribute-plus-btn');
    const minusButtons = document.querySelectorAll('.attribute-minus-btn');

    const attributeElements = {
        hp: { value: hpValue, bar: hpBar, max: 200 },
        defense: { value: defenseValue, bar: defenseBar, max: 30 },
        special: { value: classAttributeValue, bar: classAttributeBar, max: 50 },
        pa: { value: paValue, bar: paBar, max: 30 }
    };

    let activeClassName = null;

    function updateBars() {
        const maxHP = 200;
        const maxPA = 30;
        const maxDefense = 30;
        const maxSpecial = 50;
        
        hpBar.style.width = `${(parseInt(hpValue.textContent) / maxHP) * 100}%`;
        paBar.style.width = `${(parseInt(paValue.textContent) / maxPA) * 100}%`;
        defenseBar.style.width = `${(parseInt(defenseValue.textContent) / maxDefense) * 100}%`;
        classAttributeBar.style.width = `${(parseInt(classAttributeValue.textContent) / maxSpecial) * 100}%`;
    }

    // Navega para a próxima seção horizontalmente e atualiza a navegação
    function navigateToSection(index) {
        const mainContent = document.querySelector('.main-content');
        const scrollPosition = sections[index].offsetLeft;
        mainContent.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        stepItems.forEach(item => item.classList.remove('active'));
        document.querySelectorAll(`.step-item[data-step="${index + 1}"]`).forEach(item => {
            item.classList.add('active');
        });
    }

    // Adiciona o evento de clique a cada card de classe
    classCards.forEach(card => {
        card.addEventListener('click', () => {
            classCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            activeClassName = card.querySelector('h3').textContent;
            
            const selectedAttributes = attributes[activeClassName];
            hpValue.textContent = selectedAttributes.hp;
            paValue.textContent = selectedAttributes.pa;
            defenseValue.textContent = selectedAttributes.defense;
            classAttributeLabel.textContent = selectedAttributes.special.name + ":";
            classAttributeValue.textContent = selectedAttributes.special.value;

            updateBars();
            updateButtons();
            
            // Navega para a próxima seção (index 1) e atualiza a barra de progresso
            navigateToSection(1);
        });
    });

    // Adiciona o evento de clique aos itens da barra de navegação
    stepItems.forEach(item => {
        item.addEventListener('click', () => {
            const step = parseInt(item.getAttribute('data-step'));
            navigateToSection(step - 1); // Subtrai 1 para corresponder ao índice do array
        });
    });
    
    // Funções para os botões de controle de atributos
    function updateButtons() {
        if (!activeClassName) {
            // Se nenhuma classe foi selecionada, inicializa com a primeira
            activeClassName = "Artilheiro";
        }
        const remainingPoints = parseInt(pointsToDistribute.textContent);
        
        plusButtons.forEach(btn => {
            btn.disabled = remainingPoints <= 0;
        });

        minusButtons.forEach(btn => {
            const attributeKey = btn.getAttribute('data-attribute');
            const elements = attributeElements[attributeKey];
            const currentValue = parseInt(elements.value.textContent);
            
            let initialValue;
            if (attributeKey === 'special') {
                initialValue = attributes[activeClassName].special.value;
            } else {
                initialValue = attributes[activeClassName][attributeKey];
            }
            
            btn.disabled = currentValue <= initialValue;
        });
    }

    plusButtons.forEach(button => {
        button.addEventListener('click', () => {
            const attributeKey = button.getAttribute('data-attribute');
            const elements = attributeElements[attributeKey];
            let currentValue = parseInt(elements.value.textContent);
            let remainingPoints = parseInt(pointsToDistribute.textContent);

            if (remainingPoints > 0) {
                currentValue++;
                remainingPoints--;
                elements.value.textContent = currentValue;
                pointsToDistribute.textContent = remainingPoints;
                updateBars();
            }
            updateButtons();
        });
    });

    minusButtons.forEach(button => {
        button.addEventListener('click', () => {
            const attributeKey = button.getAttribute('data-attribute');
            const elements = attributeElements[attributeKey];
            let currentValue = parseInt(elements.value.textContent);
            let remainingPoints = parseInt(pointsToDistribute.textContent);
            
            let initialValue;
            if (attributeKey === 'special') {
                initialValue = attributes[activeClassName].special.value;
            } else {
                initialValue = attributes[activeClassName][attributeKey];
            }

            if (currentValue > initialValue) {
                currentValue--;
                remainingPoints++;
                elements.value.textContent = currentValue;
                pointsToDistribute.textContent = remainingPoints;
                updateBars();
            }
            updateButtons();
        });
    });
    
    // Lógica para marcar o link de navegação ativo
    const navLinks = document.querySelectorAll('.home-header nav a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();

        if (linkPage === currentPage) {
            link.classList.add('active-link');
        }
    });

    if (currentPage === '' || currentPage === 'index.html') {
        document.querySelector('.home-header nav a[href="index.html"]').classList.add('active-link');
    }

    // Inicializa a função para garantir o estado inicial das barras e botões
    updateButtons();
    updateBars();
});