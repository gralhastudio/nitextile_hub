// Get the modal element
var modal = document.getElementById('myModal');

// Get the news block element
var newsBlock = document.querySelector('.news-block');

// Get elements inside the modal
var modalImage = document.getElementById('modal-image');
var modalTitle = document.querySelector('.modal-title');
var modalDescription = document.querySelector('.modal-description');

// When the news block is clicked, display the modal
newsBlock.addEventListener('click', function() {
 // Set the modal content
 modalImage.src = 'https://nitextile.pt/wp-content/uploads/2023/08/NOTICIA_2.png?_t=1694381223';

 // Show the modal
 modal.style.display = 'block';
});

// When the close button is clicked, hide the modal
var closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', function() {
 modal.style.display = 'none';
});

// Close the modal when clicking outside the modal content
window.addEventListener('click', function(event) {
 if (event.target == modal) {
   modal.style.display = 'none';
 }
});
