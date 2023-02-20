 (function(){
        const openButton = document.querySelector('.nav__menu');
        const menu = document.querySelector('.nav__link');
        const closeMenu = document.querySelector('.nav__close');

        openButton.addEventListener('click', ()=>{
        menu.classList.add('menu--show');
        });

        closeMenu.addEventListener('click', ()=>{
         menu.classList.remove('nav__link--show');
        });



})();

// window.addEventListener('DOMContentLoaded', (event) =>{
    
//     const menuBtn = document.getElementById('menu');
//     const nav = document.querySelector('nav')

//     menuBtn.addEventListener('click', (event) =>{
//         menuBtn.classList.toggle("salir");
//         nav.classList.toggle("visible");
//     })
// })