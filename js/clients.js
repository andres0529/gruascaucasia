const carouselSlide = document.querySelector('.carousel-slide'); 
const carouselImages = document.querySelectorAll('.carousel-slide img');


//button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
let counter= 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';

setInterval(function() {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    // carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
},3000);

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id == 'firstClone'){
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
    }
});
