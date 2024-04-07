document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".mobile-servicos-block");

  blocks.forEach((block) => {
    const header = block.querySelector(".mobile-servicos-header");
    const content = block.querySelector(".mobile-servicos-content");

    header.addEventListener("click", () => {
      blocks.forEach((otherBlock) => {
        if (otherBlock !== block) {
          otherBlock.classList.remove("active");
          otherBlock.querySelector(".mobile-servicos-content").style.maxHeight = "0";
        }
      });

      block.classList.toggle("active");
      if (block.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0";
      }
    });
  });
});
