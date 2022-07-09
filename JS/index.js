// CASTAWAY WEB-SITE TO THE CODES

window.addEventListener("load", () => {
  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });

  // AOS JAVASCRIPT LIBRARY
  AOS.init();

  // SECRET NAVBAR JAVASCRIPT TO THE CODES
  let timesBtn = document.querySelector(".fa-times");
  let barsBtn = document.querySelector(".fa-bars");
  let navbar = document.querySelector(".secret__navbar");
  let linkBtn = document.querySelectorAll(".secret__navbar__link");
  barsBtn.addEventListener("click", () => {
    navbar.classList.add("active");
  });

  timesBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
  });

  linkBtn.forEach((item) => {
    item.addEventListener("click", () => {
      navbar.classList.remove("active");
    });
  });
});
