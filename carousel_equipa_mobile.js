document.addEventListener("DOMContentLoaded", function () {
          const teamSlides = document.querySelectorAll(".team-slide");
          const prevBtn = document.querySelector(".prev-btn");
          const nextBtn = document.querySelector(".next-btn");
          let currentSlideIndex = 0;

          // Display the initial slide
          teamSlides[currentSlideIndex].classList.add("active");

          // Function to show a slide by index
          function showSlide(index) {
              teamSlides.forEach((slide) => slide.classList.remove("active"));
              teamSlides[index].classList.add("active");
          }

          // Function to handle the "Previous" button click
          prevBtn.addEventListener("click", function () {
              currentSlideIndex = (currentSlideIndex - 1 + teamSlides.length) % teamSlides.length;
              showSlide(currentSlideIndex);
          });

          // Function to handle the "Next" button click
          nextBtn.addEventListener("click", function () {
              currentSlideIndex = (currentSlideIndex + 1) % teamSlides.length;
              showSlide(currentSlideIndex);
          });
      });
