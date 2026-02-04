document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');

    if (carousel) {
        const items = carousel.querySelectorAll('.carousel-item');
        const prevButton = document.querySelector('.carousel-prev');
        const nextButton = document.querySelector('.carousel-next');
        let currentIndex = 0;

        items.forEach((item, index) => {
            if (index !== 0) {
                item.style.display = 'none';
            }
        });

        function showItem(index) {
            items.forEach(item => item.style.display = 'none');
            items[index].style.display = 'block';
            items[index].style.animation = 'fadeIn 0.5s ease-in-out';
        }

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            showItem(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        });

        setInterval(() => {
            currentIndex = (currentIndex + 1) % items.length;
            showItem(currentIndex);
        }, 5000);
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    const toggleBtn = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    toggleBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        navLinks.classList.remove("active");
      }
    });
}); 