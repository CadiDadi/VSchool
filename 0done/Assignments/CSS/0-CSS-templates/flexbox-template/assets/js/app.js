// $(window).scroll(function() {
//     if ($(this).scrollTop() > 1){
//     $('.header').addClass('sticky');
//     }
//     else{
//     $('.header').removeClass('sticky');
//     }

/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

var nav = document.getElementById('container');                                                                                            function onScroll(){
    if(window.innerWidth <= 640){
        nav.style.width = "625px";
    } 
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        nav.style.background = "black";
        nav.style.position = "fixed" 
        nav.style.zIndex = 99;
        for(var i = 0; i < navLi.length; i++){
            navLi[i].style.color = "white";
            navLi[i].style.fontWeight = "bold";
        }
    } else {
        nav.style.backgroundColor = "rgba(128,128,128,0.7)";
        for(var i = 0; i < navLi.length; i++){
            navLi[i].style.color = "aquamarine";
            navLi[i].style.fontWeight = "bold";
        }
    }
} 
