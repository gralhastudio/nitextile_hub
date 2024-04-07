


        document.addEventListener("DOMContentLoaded", function () {
             const navLinks = document.querySelector('.nav-links');
             const menuIcon = document.querySelector('.menu-icon');
             let isMenuOpen = false;

             function toggleMenu() {
                 if (isMenuOpen) {
                     navLinks.classList.remove('active');
                     navLinks.classList.add('animate'); // Add this line
                 } else {
                     navLinks.classList.add('active');
                     navLinks.classList.remove('animate'); // Add this line
                 }
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
         });




const TeamTitle = document.querySelector('.Teamtitle');

const observer = new IntersectionObserver(entries => {
 entries.forEach(entry => {
   if (entry.isIntersecting) {
     teamTitle.classList.add('appear');
     observer.unobserve(entry.target);
   }
 });
});

observer.observe(TeamTitle);
</script>
