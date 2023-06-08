window.addEventListener('DOMContentLoaded', function() {
    function add(slide){
        slide.classList.add('active');
        slide.classList.add('zoom');
        slide.querySelector('p').classList.add('active1');
        slide.querySelector('img').classList.add('moveup');
    }

    function remove(slide){
        slide.classList.remove('active');
        slide.classList.remove('zoom');
        slide.querySelector('p').classList.remove('active1');
        slide.querySelector('img').classList.remove('moveup');
    }

    function nextSlide(){
        remove(slides[currentSlideIndex]);
        resetAnimation(slides[currentSlideIndex]);
        if(currentSlideIndex === slides.length-1){
            currentSlideIndex = 0;
        } else {
            currentSlideIndex +=1;
        }
        add(slides[currentSlideIndex]);
        resetInterval();
        animation(slides[currentSlideIndex]);
    }

    function previousSlide(){
        remove(slides[currentSlideIndex]);
        resetAnimation(slides[currentSlideIndex]);
        if(currentSlideIndex === 0){
            currentSlideIndex = slides.length-1;
        } else {
            currentSlideIndex -=1;
        }
        add(slides[currentSlideIndex]);
        resetInterval();
        animation(slides[currentSlideIndex]);

    }

    function startInterval(){
        intervalId = setInterval(nextSlide,8000);
    }
    
    function resetInterval(){
        clearInterval(intervalId);
        startInterval();
    }

    //------------- main function
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 0;
    add(slides[0]);

    startInterval();
    document.getElementById('next-button').addEventListener('click', nextSlide);
    document.getElementById('previous-button').addEventListener('click', previousSlide);
  });

function animation(slide){
    if(slide.querySelector('.ski')){
        let ski = slide.querySelector('.ski');
        ski.classList.add('skimove');
        console.log(1);
    }
}

function resetAnimation(slide){
    if(slide.querySelector('.ski')){
        let ski = slide.querySelector('.ski');
        ski.classList.remove('skimove');
        console.log(1);
    }
}