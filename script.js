const menu = document.querySelector('.fa-bars');
const navLink = document.querySelector('.nav-link');
const times = document.querySelector('.fa-times');
  import { createChat } from 'https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js';

      createChat({
        webhookUrl: 'https://playground.naratel.net.id/webhook/bb279b80-4558-486f-9837-b6511edd129d/chat , '
      });

menu.addEventListener('click',function(){
    navLink.style.transform='translateX(-200px)';
    navLink.style.transition = 'all 1s';
});
times.addEventListener('click',function(){
    navLink.style.transform='translateX(0)';
    navLink.style.transition = 'all 1s';
});
