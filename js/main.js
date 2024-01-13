let mobileMenuClick = document.querySelector('.mobile-menu-click');
let menu = document.querySelector('.menu');

mobileMenuClick.addEventListener('click', function(){
    mobileMenuClick.classList.toggle('active');
    menu.classList.toggle('active');
})