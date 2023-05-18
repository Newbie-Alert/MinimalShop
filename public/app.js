const menu = document.querySelector('.fa-bars');
const menuBox = document.querySelector('.nav-menu-box');
const menuClose = document.querySelector('.fa-xmark');

menu.addEventListener('click', function () {
  menuBox.style.transform = 'translateX(0)';
})
menuClose.addEventListener('click', function () {
  menuBox.style.transform = 'translateX(200vw)';
})