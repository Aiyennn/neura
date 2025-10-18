 const container = document.getElementById('service-container');
        const cards = document.querySelectorAll('.service-card');
        const prevBtn = document.getElementById('prev');
        const nextBtn = document.getElementById('next');
        const dots = document.querySelectorAll('.dot');
        
        let currentIndex = 1;
        const totalCards = cards.length;

        function updateCarousel() {
            cards.forEach((card, index) => {
                card.classList.remove('center', 'side');
                
                if (index === currentIndex) {
                    card.classList.add('center');
                } else {
                    card.classList.add('side');
                }
            });

            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });

            const offset = -(currentIndex * (cards[0].offsetWidth + 30)) + 
                          (container.offsetWidth / 2) - 
                          (cards[0].offsetWidth / 2);
            container.style.transform = `translateX(${offset}px)`;
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalCards;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            updateCarousel();
        });

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                currentIndex = parseInt(e.target.dataset.index);
                updateCarousel();
            });
        });

        window.addEventListener('resize', updateCarousel);
        updateCarousel();