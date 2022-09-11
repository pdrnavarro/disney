var menu = document.querySelector(".menu")
menu.addEventListener('click', ()=>{
    menu.classList.toggle('clicked');

   var  loginbuttons = document.querySelector(".login")
   loginbuttons.classList.toggle("login-buttons")

})