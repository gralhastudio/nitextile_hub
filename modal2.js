// Get the modal elements
var modal1 = document.getElementById('myModal1');
var modal2 = document.getElementById('myModal2');

// Get the news block elements
var newsBlock1 = document.getElementById('news-block-1');
var newsBlock2 = document.getElementById('news-block-2');

// Get elements inside the modal
var modalImage1 = document.getElementById('modal-image1');
var modalImage2 = document.getElementById('modal-image2');

var modalTitle1 = document.getElementById('modal-title1');
var modalTitle2 = document.getElementById('modal-title2');

var modalDescription1 = document.getElementById('modal-description1');
var modalDescription2 = document.getElementById('modal-description2');

// Event listener for the first news block
newsBlock1.addEventListener('click', function() {
    // Set the modal content for the first news block
    modalImage1.src = 'https://nitextile.pt/wp-content/uploads/2023/08/NOTICIA_5.png?_t=1694381223';
    modalTitle1.textContent = 'Noticia 1 - Título de Introdução';
    modalDescription1.textContent = 'Small text here for the first news block';

    // Show the first modal
    modal1.style.display = 'block';
});

// Event listener for the second news block
newsBlock2.addEventListener('click', function() {
    // Set the modal content for the second news block
    modalImage2.src = 'URL_FOR_NEWS_BLOCK_2_IMAGE';
    modalTitle2.textContent = 'Noticia 2 - Título de Introdução';
    modalDescription2.textContent = 'Small text here for the second news block';

    // Show the second modal
    modal2.style.display = 'block';
});

// Close buttons and window click events can remain the same
