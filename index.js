/*
to add more motion objects, add the initial class as the key into the dictionary below, and 
the action class as the value, make sure all motion objects you add have the "motion" class
as well as the initial class
*/ 
const motionClasses = { 
    ski: "skimove"
}

//start animation function, 
function animation(slide){
    let object = slide.querySelector('.motion');
    if(object){
        object.classList.add(motionClasses[Array.from(object.classList)[1]]);
    }
}

//reset animation function
function resetAnimation(slide){
    let object = slide.querySelector('.motion');
    if(object){
        object.classList.remove(motionClasses[Array.from(object.classList)[1]]);
    }
}

window.addEventListener('DOMContentLoaded', function() {
    //function that adds action classes when slide is loaded
    function add(slide){
        slide.classList.add('active');
        slide.classList.add('zoom');
        slide.querySelector('p').classList.add('textactive');
        slide.querySelector('img').classList.add('moveup');
    }

    //function that removes action classes when slide is unloaded
    function remove(slide){
        slide.classList.remove('active');
        slide.classList.remove('zoom');
        slide.querySelector('p').classList.remove('textactive');
        slide.querySelector('img').classList.remove('moveup');
    }

    //function that loads next slide
    function nextSlide(){
        remove(slides[currentSlideIndex]); //unloads previous slide elements
        resetAnimation(slides[currentSlideIndex]); //resets the animation (if any)
        //restarts reached the end
        if(currentSlideIndex === slides.length-1){
            currentSlideIndex = 0;
        } else {
            currentSlideIndex +=1;
        }
        add(slides[currentSlideIndex]); //loads next slide
        resetInterval(); //resets the auto scroll
        animation(slides[currentSlideIndex]); //starts animation (if any)
    }

    //function that loads previous slide
    function previousSlide(){
        remove(slides[currentSlideIndex]); //unloads previous slide elements
        resetAnimation(slides[currentSlideIndex]); //resets the animation (if any)
        //restarts reached the beginning
        if(currentSlideIndex === 0){
            currentSlideIndex = slides.length-1;
        } else {
            currentSlideIndex -=1;
        }
        add(slides[currentSlideIndex]); //loads next slide
        resetInterval();
        animation(slides[currentSlideIndex]); //starts animation (if any)

    }

    //function that starts timer that automatically moves to the next slide when timer is up
    function startInterval(){
        intervalId = setInterval(nextSlide,8000); //change the number as needed, 8000 is 8 seconds
    }
    
    //function that restarts the timer whenever nextslide or previousslide is called, makes sure that 
    //slides only automatically scroll when the user is not actively interacting with slides
    function resetInterval(){
        clearInterval(intervalId);
        startInterval();
    }

    //------------- main function ---------------
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 0;
    add(slides[0]);
    startInterval();
    
    document.getElementById('next-button').addEventListener('click', nextSlide);
    document.getElementById('previous-button').addEventListener('click', previousSlide);
  });

