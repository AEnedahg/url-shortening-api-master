const menuBar = document.getElementById("menu-bar-id");
const mobileNav = document.getElementsByClassName("mobile-nav-menu")[0];
menuBar.addEventListener('click', () => {
  mobileNav.classList.toggle("mobile-nav-menu");
})
