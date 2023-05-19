var hamburger = document.querySelector('.hamburger');
var navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', function() {
  navMenu.classList.toggle('show');
});
