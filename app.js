const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("open");
});

var anim = document.getElementById('addd');
var anim2 = document.getElementById('addf');
var anim3 = document.getElementById('addg');



window.onload = function(){
    
    setTimeout(function() {
        
    anim.classList.add('animate__animated','animate__fadeInUp');
    anim2.classList.add('animate__animated','animate__fadeInUp');
    anim3.classList.add('animate__animated','animate__fadeInUp');
     }, 500);

    setTimeout(function() {
     document.getElementById('www').classList.remove("dipn");
    }, 500);
};

var mybtn = document.getElementById('goup55');
window.onscroll = function () {
    
    'use strict';

    if (window.pageYOffset >= 400) {
    
        mybtn.style.display='block';
    
    }else {
        mybtn.style.display='none';
    }
    
};
mybtn.onclick = function () {
    
    'use strict';

    window.scrollTo(0,0);

};