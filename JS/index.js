// CASTAWAY WEB-SITE TO THE CODES

window.addEventListener("load", () => {
  window.addEventListener("scroll", () => {
    $(".header").classList.toggle("active", window.scrollY > 0);
  });

  // AOS JAVASCRIPT LIBRARY
  AOS.init();

  // SECRET NAVBAR JAVASCRIPT TO THE CODES
  $(".fa-bars").addEventListener("click", () => {
    $(".secret__navbar").classList.add("active");
  });

  $(".fa-times").addEventListener("click", () => {
    $(".secret__navbar").classList.remove("active");
  });

  $$(".secret__navbar__link").forEach((item) => {
    item.addEventListener("click", () => {
      $(".secret__navbar").classList.remove("active");
    });
  });
});
