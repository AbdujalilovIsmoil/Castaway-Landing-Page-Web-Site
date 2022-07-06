// CASTAWAY WEB-SITE TO THE CODES

window.addEventListener("load", () => {
  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
});
