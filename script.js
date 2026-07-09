document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Sistema de Curtidas (Like)
    const likeButtons = document.querySelectorAll('.like-btn');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const countSpan = button.querySelector('.like-count');
            let currentLikes = parseInt(countSpan.textContent);
            
            if (button.classList.contains('liked')) {
                button.classList.remove('liked');
                countSpan.textContent = currentLikes - 1;
            } else {
                button.classList.add('liked');
                countSpan.textContent = currentLikes + 1;
            }
        });
    });

    // 2. Filtro de Categorias no Menu
    const filterButtons = document.querySelectorAll('.filter-btn');
    const postCards = document.querySelectorAll('.post-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const category = button.getAttribute('data-category');

            postCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});