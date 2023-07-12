const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");
const slideCount = slide.length;

let currentIdx = 0;
let slideWidth = 300;
let slideMargin = 30;

slides.getElementsByClassName.width = (slideWidth + slideMargin) * slideCount - slideMargin + 'px';

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function moveSlide(num){
    slides.style.left = -num * 330 +'px';
    currentIdx = num;
}

nextBtn.addEventListener('click', function(){
    if(currentIdx < slideCount-3){
        moveSlide(currentIdx + 1);
    } else {
        moveSlide(0);
    }
});

prevBtn.addEventListener('click', function(){
    if(currentIdx > 0){
        moveSlide(currentIdx - 1);
    } else {
        moveSlide(slideCount - 3);
    }
});