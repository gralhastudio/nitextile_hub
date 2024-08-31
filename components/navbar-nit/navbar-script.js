document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.querySelector('.mobile-menu .checkbox');
    const lines = document.querySelectorAll('.mobile-menu .hamburger-lines .line');

    checkbox.addEventListener('change', function () {
        lines.forEach(line => line.classList.toggle('active'));
    });
});
