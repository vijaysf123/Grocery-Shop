const searchForm = document.querySelector(".search-form");
const serchBtn = document.getElementById("search-btn")

serchBtn.addEventListener('click',function(){
    searchForm.classList.toggle("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove("active");    
    navbar.classList.remove("active");
});


const shoppingCart = document.querySelector(".shopping-cart");
const cartBtn = document.getElementById("cart-btn")

cartBtn.addEventListener('click',function(){
    shoppingCart.classList.toggle("active");
    loginForm.classList.remove("active");
    navbar.classList.remove("active");
    searchForm.classList.remove("active");
});


const loginForm = document.querySelector(".login-form");
const loginBtn = document.getElementById("login-btn")

loginBtn.addEventListener('click',function(){
    loginForm.classList.toggle("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
    navbar.classList.remove("active");
});


const navbar = document.querySelector(".navbar");
const menuBtn = document.getElementById("menu-btn")

menuBtn.addEventListener('click',function(){
    navbar.classList.toggle("active");
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
});


// scroll behavior

window.addEventListener("scroll", function(){
    navbar.classList.remove("active");
    loginForm.classList.remove("active");
    searchForm.classList.remove("active");
    shoppingCart.classList.remove("active");
});