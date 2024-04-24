const slides = document.querySelectorAll(".slides img");
let SlideIndex = o
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded",initializeSlider);

function initializeSlider(){ //ระบบ slide
    if(slides.length > 0 ){
        slides[SlideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);

    }
    
}

function showSlide(index){

    if(index >= slides.length){
        SlideIndex = 0;
    }
    else if(index < 0){
        SlideIndex = slides.length - 1;
    }

    slides.forEach(slide =>{
        slide.classList.remove("displaySlide");
    });
    slides[SlideIndex].classList.add("displaySlide")
}

function prevSlide(){
    clearInterval(intervalId);
    SlideIndex--;
    showSlide(SlideIndex);
}
function nextSlide(){
    SlideIndex++;
    showSlide(SlideIndex);
}
