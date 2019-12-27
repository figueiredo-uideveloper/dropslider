// function move(item, callback) {
//     item.style.transform = 'translateX(0)';
//     callback();
// }

function next(slides, currentSlide) {
    const i = slides.indexOf(currentSlide) + 1;
    let nextSlide = i < slides.length ? slides[i] : slides[0];
    currentSlide.style.transform = 'translateX(-100%)';
    nextSlide.style.transform = 'translateX(0)';
}

const buttonNext = document.querySelector('.dropslider-controllers__next');
const dropsliderItems = document.querySelectorAll('.dropslider__item');
const slides = Array.from(dropsliderItems);

buttonNext.addEventListener('click', () => {
    let currentSlide = document.querySelector('.is-active');
    console.log(currentSlide);
    next(slides, currentSlide);
});



// function getNext(list, current) {
//     const i = list.indexOf(current) + 1;
//     return i < list.length ? list[i] : list[0];
// }



// function slider() {
//     const dropsliderItems = document.querySelectorAll('.dropslider__item');
//     const slides = Array.from(dropsliderItems);

//     showSlide(slides, slides[0]);
// }

// function showSlide(slides, slide) {
//     slide.style.transform = 'translateX(0)';

//     move(slide, () => {
//         slide.style.transform = 'translateX(-100%)';
//         showSlide(slides, getNext(slides, slide));
//     });
// }

