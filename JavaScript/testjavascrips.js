/*$(document).ready(function(){
$(window).scroll(function(){
    if (this.scrollY > 20) {
        $('.navbar').addClass("scroll");
    }
});
});*/
var navbar = document.getElementById('navbar');
var scrollUp = document.getElementById('scrollUp');
onscroll = function(){
    if (this.scrollY > 50) {
        navbar.classList.add('scroll');
    }
    else{
        navbar.classList.remove('scroll');
    }
    if (this.scrollY > 100) {
        scrollUp.classList.add('show');
    }
    else{
        scrollUp.classList.remove('show');
    }
};
var menu = document.getElementById('menu');
var menuBtn = document.getElementById('menu-btn');
menu.style.left='-100%';

menuBtn.onclick = function(){
    if(menu.style.left=='-100%')
    {
        menu.style.left='0';
    }
    else
    {
        menu.style.left='-100%'; 
    }
};
menu.onclick=function(){
    menu.style.left='-100%';
}
 