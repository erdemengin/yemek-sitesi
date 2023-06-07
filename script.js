let menu_btn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
menu_btn.addEventListener("click",function(){
    navbar.classList.toggle("navbarOpen");
});