document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    let isMenuOpen = false;

    function toggleMenu() {
        navLinks.classList.toggle('active');
        isMenuOpen = !isMenuOpen;
    }

    menuIcon.addEventListener('click', (event) => {
        toggleMenu();
        event.stopPropagation();
    });

    document.addEventListener('click', (event) => {
        if (isMenuOpen && !navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
            toggleMenu();
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            toggleMenu();
            const targetSection = document.querySelector(link.getAttribute('href'));
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
