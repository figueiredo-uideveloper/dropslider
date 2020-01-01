const tl = gsap.timeline();

function setInitialPosition(slide) {
    tl.set(slide, {x: "100%"});
}

function next(activeSlide, nextSlide) {
    let slideTime = 1;
    tl.to(activeSlide, { duration: slideTime, x: "-100%" })
        .to(nextSlide, { duration: slideTime, x: "0" }, `=-${slideTime}`)
        .set(activeSlide, { x: "100%" });
    
    updateActiveSlide(activeSlide, nextSlide);
}

function getNext(slides, activeSlide) {    
    const index = slides.indexOf(activeSlide) + 1;
    let nextSlide = index < slides.length ? slides[index] : slides[0];

    return nextSlide;
}

function updateActiveSlide(currentSlide, otherSlide) {
    currentSlide.classList.remove('is-active');
    otherSlide.classList.add('is-active');
}

const dropsliderItems = document.querySelectorAll('.dropslider__item');
const slides = Array.from(dropsliderItems);

dropsliderItems.forEach(
    item => item.classList.contains('is-active') ? null : setInitialPosition(item)
);

const buttonNext = document.querySelector('.dropslider-controllers__next');

buttonNext.addEventListener('click', () => {
    let activeSlide = document.querySelector('.is-active');
    next(activeSlide, getNext(slides, activeSlide));
});

let automatico = false;

if(automatico === true) {
    setInterval(() => {
        let activeSlide = document.querySelector('.is-active');
        next(activeSlide, getNext(slides, activeSlide))
    }, 3000);
}