let menu=document.querySelector('#btn');
let nav=document.querySelector('#nav');

menu.addEventListener('click',()=>{
    nav.classList.toggle('active');
    menu.classList.toggle('fa-times');
})