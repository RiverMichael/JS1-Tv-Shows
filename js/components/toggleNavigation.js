const hamburgerMenu = document.querySelector("#hamburger");

hamburgerMenu.addEventListener("click", toggleNavigation);

/**
 * Toggles the navigation menu on/off
 */
function toggleNavigation() {
  const nav = document.querySelector("nav");
  nav.classList.toggle("split");
}
