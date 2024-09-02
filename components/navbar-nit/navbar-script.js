document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.mobile-menu .checkbox');
    const lines = document.querySelectorAll('.mobile-menu .hamburger-lines .line');
    const mobileMenu = document.querySelector ('.mobile-menu-container .nav-links');

    checkbox.addEventListener('change', function () {
        mobileMenu.classList.toggle('active');
        lines.forEach(line => line.classList.toggle('active'));
        
    });
});
