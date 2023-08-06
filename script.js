const menu = document.querySelector('.fa-bars');
const navLink = document.querySelector('.nav-link');
const times = document.querySelector('.fa-times');
menu.addEventListener('click',function(){
    navLink.style.transform='translateX(-200px)';
    navLink.style.transition = 'all 1s';
});
times.addEventListener('click',function(){
    navLink.style.transform='translateX(0)';
    navLink.style.transition = 'all 1s';
});
