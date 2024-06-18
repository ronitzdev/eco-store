const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarLinks = document.getElementById("navbar-links");

hamburgerMenu.addEventListener("click", function () {
  navbarLinks.classList.toggle("active");
  hamburgerMenu.classList.toggle("change");
});
