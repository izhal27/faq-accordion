const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    const accordionContainer = header.closest(".accordion-container");
    const accordionDesc = accordionContainer.querySelector(".accordion-desc");
    const button = header.querySelector(".toggle-btn");
    const buttonIcon = button.querySelector(".icon");

    const isActive = button.classList.contains("active");

    accordionHeaders.forEach((hdr) => {
      const container = hdr.closest(".accordion-container");
      const desc = container.querySelector(".accordion-desc");
      const btn = hdr.querySelector(".toggle-btn");
      const btnIcon = btn.querySelector(".icon");

      btn.classList.remove("active");
      desc.classList.remove("active");
      btnIcon.src = "./assets/images/icon-plus.svg";
    });

    if (!isActive) {
      button.classList.add("active");
      accordionDesc.classList.add("active");
      buttonIcon.src = "./assets/images/icon-minus.svg";
    }
  });
});
