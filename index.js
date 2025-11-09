const openMenuButton = document.querySelector('.menu-toggle');
const closeMenuButton = document.querySelector('.close-btn');
const mobileNav = document.querySelector('.mobile-nav');

openMenuButton.addEventListener('click', () => {
  mobileNav.classList.add('is-open');
});

closeMenuButton.addEventListener('click', () => {
  mobileNav.classList.remove('is-open');
});