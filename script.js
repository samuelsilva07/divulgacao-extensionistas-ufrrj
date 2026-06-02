// Aguarda o documento HTML ser totalmente carregado
document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. ACESSIBILIDADE: Tamanho da Fonte (A+ / A-)
    // ==========================================
    
    // Seleciona os botões no DOM (Document Object Model)
    const btnIncreaseFont = document.querySelectorAll('.user-actions button')[0];
    const btnDecreaseFont = document.querySelectorAll('.user-actions button')[1];
    
    // Define o tamanho base da fonte (100%)
    let currentFontSize = 100;

    // Função para aumentar a fonte (limite de 150%)
    btnIncreaseFont.addEventListener('click', () => {
        if (currentFontSize < 150) {
            currentFontSize += 10;
            document.body.style.fontSize = `${currentFontSize}%`;
        }
    });

    // Função para diminuir a fonte (limite de 80%)
    btnDecreaseFont.addEventListener('click', () => {
        if (currentFontSize > 80) {
            currentFontSize -= 10;
            document.body.style.fontSize = `${currentFontSize}%`;
        }
    });


    // ==========================================
    // 2. NAVEGAÇÃO: Rolagem Suave (Smooth Scroll)
    // ==========================================
    
    // Seleciona todos os links do menu que começam com '#' (âncoras)
    const menuLinks = document.querySelectorAll('nav a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Previne o pulo seco padrão do HTML
            event.preventDefault();

            // Pega o ID do destino (ex: '#sobre-o-curso')
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Se a seção existir, faz a rolagem suave até ela
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});