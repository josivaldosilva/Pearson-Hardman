// Elements

const menu = document.querySelector('#menu');
const mobileNavbar = document.querySelector('#mobile-navbar');
const closeMenu = document.querySelector('#close-menu');

const desktopsLinks = document.querySelectorAll('#navbar a');
const mobileLinks = document.querySelectorAll('#mobile-navbar a');
const allLinks = [...desktopsLinks, ...mobileLinks];

const slides = document.querySelectorAll('.banner');
const dots = document.querySelectorAll('.dot');
let slideIndex = 0;


// Functions 

function smoothScroll(e){
   e.preventDefault();

   const href = this.getAttribute("href");
   const offsetTop = document.querySelector(href).offsetTop;

   scroll({
    top: offsetTop,
    behavior: "smooth",
   });

   setTimeout(() => {
        if(mobileNavbar.classList.contains('active')){
            mobileNavbar.classList.remove('active')
        }
   }, 500)
};


function showSlides(){
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove('active');
        dots[i].classList.remove('active');
    }

    slideIndex++

    if(slideIndex > slides.length){
        slideIndex = 1; 
    }

    slides[slideIndex - 1].classList.add('active')
    dots[slideIndex - 1].classList.add('active')

    setTimeout(showSlides, 3000);
}



// Events 

[menu, closeMenu].map((btn) => {
    btn.addEventListener('click', (e) => {
        mobileNavbar.classList.toggle('active')
    })
});


allLinks.map((link) => {
   link.addEventListener('click', smoothScroll)
});


//Initialization

showSlides()
