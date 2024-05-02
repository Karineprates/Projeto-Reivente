document.addEventListener('DOMContentLoaded', function() {
    const cardContainer = document.querySelector('.card-container');
    const arrowLeft = document.querySelector('.arrow-svg-left');
    const arrowRight = document.querySelector('.arrow-svg-right');

    let scrollPosition = 0;

    // Calculando a largura média do cartão e o número total de cartões
    const cards = document.querySelectorAll('.produts-card');
    const cardWidth = cards[0].offsetWidth + parseFloat(getComputedStyle(cards[0]).marginLeft) + parseFloat(getComputedStyle(cards[0]).marginRight);
    const totalCards = cards.length;

    // Definindo a largura do contêiner para exibir todas as imagens lado a lado
    cardContainer.style.width = `${cardWidth * totalCards}px`;

    arrowLeft.addEventListener('click', function() {
        console.log('Arrow left clicked');
        scrollPosition -= cardWidth;
        if (scrollPosition < 0) {
            scrollPosition = 0;
        }
        console.log('Scroll position:', scrollPosition);
        cardContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });

    arrowRight.addEventListener('click', function() {
        console.log('Arrow right clicked');
        scrollPosition += cardWidth;
        const maxScroll = cardContainer.scrollWidth - cardContainer.offsetWidth;
        if (scrollPosition > maxScroll) {
            scrollPosition = 0; // Volta ao início
        }
        console.log('Scroll position:', scrollPosition);
        cardContainer.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
    });
});
