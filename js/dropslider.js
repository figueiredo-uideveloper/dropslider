const tl = gsap.timeline();

function setInitialPosition(slide) {
    tl.set(slide, {x: "100%"});
}

function next(activeSlide, nextSlide) {
    tl.to(activeSlide, {duration: 1, x: "-100%"})
        .to(nextSlide, {duration: 1, x: "0"})
        .set(activeSlide, {x: "100%"});
}

function getNext(slides, activeSlide) {    
    const index = slides.indexOf(activeSlide) + 1;
    let nextSlide = index < slides.length ? slides[index] : slides[0];

    return nextSlide;
}

const dropsliderItems = document.querySelectorAll('.dropslider__item');

dropsliderItems.forEach(
    item => item.classList.contains('is-active') ? null : setInitialPosition(item)
);

const buttonNext = document.querySelector('.dropslider-controllers__next');

buttonNext.addEventListener('click', () => {
    let activeSlide = document.querySelector('.is-active');
    next(activeSlide, getNext(slides, activeSlide));
});

// function next(slides, currentSlide) {
//     const index = slides.indexOf(currentSlide) + 1;
//     let nextSlide = index < slides.length ? slides[index] : slides[0];
//     currentSlide.style.transform = 'translateX(-100%)';
//     currentSlide.style.zIndex = '1';

//     nextSlide.style.transform = 'translateX(0)';
//     nextSlide.style.zIndex = '1';

//     currentSlide.classList.remove('is-active');
//     nextSlide.classList.add('is-active');

//     const olderIndex = slides.indexOf(currentSlide) - 1;
//     let olderSlide = olderIndex >= 0 ? slides[olderIndex] : slides[3];
//     olderSlide.style.transform = 'translateX(100%)';
//     olderSlide.style.zIndex = '0';
//     console.log(slides.indexOf(olderSlide), olderSlide);
// }

// const buttonNext = document.querySelector('.dropslider-controllers__next');
// const dropsliderItems = document.querySelectorAll('.dropslider__item');
// const slides = Array.from(dropsliderItems);

// buttonNext.addEventListener('click', () => {
//     let currentSlide = document.querySelector('.is-active');
//     next(slides, currentSlide);
// });