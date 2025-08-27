document.addEventListener('DOMContentLoaded', () => {
    // Seletores das etapas
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const step3 = document.getElementById('step-3');

    // Seletores dos cards de classe
    const classCards = document.querySelectorAll('.class-card');

    // Botões de navegação
    const backToClassBtn = document.getElementById('back-to-class');
    const nextToCustomizeBtn = document.getElementById('next-to-customize');
    const backToAttributesBtn = document.getElementById('back-to-attributes');
    const finishWizardBtn = document.getElementById('finish-wizard');

    // Troca para etapa de atributos ao clicar em uma classe
    classCards.forEach(card => {
        card.onclick = function() {
            classCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            step1.classList.remove('active-section');
            step2.classList.add('active-section');
        };
    });

    // Botão voltar para classe
    backToClassBtn.onclick = function() {
        step2.classList.remove('active-section');
        step1.classList.add('active-section');
    };

    // Botão próximo para personalizar
    nextToCustomizeBtn.onclick = function() {
        step2.classList.remove('active-section');
        step3.classList.add('active-section');
    };

    // Botão voltar para atributos
    backToAttributesBtn.onclick = function() {
        step3.classList.remove('active-section');
        step2.classList.add('active-section');
    };

    // Botão finalizar
    finishWizardBtn.onclick = function() {
        alert('Ficha finalizada!');
    };

    // Navegação por clique nos números (wizard)
    // Etapa 1
    const navStep1 = document.getElementById('nav-step-1');
    if (navStep1) navStep1.onclick = function() {
        step2.classList.remove('active-section');
        step3.classList.remove('active-section');
        step1.classList.add('active-section');
    };
    // Etapa 2
    const navStep2 = document.getElementById('nav-step-2');
    if (navStep2) navStep2.onclick = function() {
        step1.classList.remove('active-section');
        step3.classList.remove('active-section');
        step2.classList.add('active-section');
    };
    // Etapa 3
    const navStep3 = document.getElementById('nav-step-3');
    if (navStep3) navStep3.onclick = function() {
        step1.classList.remove('active-section');
        step2.classList.remove('active-section');
        step3.classList.add('active-section');
    };

    // Para as etapas 2 e 3 (caso use IDs diferentes)
    const navStep1_2 = document.getElementById('nav-step-1-2');
    if (navStep1_2) navStep1_2.onclick = function() {
        step2.classList.remove('active-section');
        step3.classList.remove('active-section');
        step1.classList.add('active-section');
    };
    const navStep2_2 = document.getElementById('nav-step-2-2');
    if (navStep2_2) navStep2_2.onclick = function() {
        step1.classList.remove('active-section');
        step3.classList.remove('active-section');
        step2.classList.add('active-section');
    };
    const navStep3_2 = document.getElementById('nav-step-3-2');
    if (navStep3_2) navStep3_2.onclick = function() {
        step1.classList.remove('active-section');
        step2.classList.remove('active-section');
        step3.classList.add('active-section');
    };

    const navStep1_3 = document.getElementById('nav-step-1-3');
    if (navStep1_3) navStep1_3.onclick = function() {
        step2.classList.remove('active-section');
        step3.classList.remove('active-section');
        step1.classList.add('active-section');
    };
    const navStep2_3 = document.getElementById('nav-step-2-3');
    if (navStep2_3) navStep2_3.onclick = function() {
        step1.classList.remove('active-section');
        step3.classList.remove('active-section');
        step2.classList.add('active-section');
    };
    const navStep3_3 = document.getElementById('nav-step-3-3');
    if (navStep3_3) navStep3_3.onclick = function() {
        step1.classList.remove('active-section');
        step2.classList.remove('active-section');
        step3.classList.add('active-section');
    };

    // Marca o link ativo no menu
    const navLinks = document.querySelectorAll('.home-header nav a');
    const currentPage = window.location.pathname.split('/').pop();
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === currentPage) {
            link.classList.add('active-link');
        }
    });
});