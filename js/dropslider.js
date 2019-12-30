// function move(item, callback) {
//     item.style.transform = 'translateX(0)';
//     callback();
// }

function next(slides, currentSlide) {
    const index = slides.indexOf(currentSlide) + 1;
    let nextSlide = index < slides.length ? slides[index] : slides[0];
    currentSlide.style.transform = 'translateX(-100%)';
    currentSlide.style.zIndex = '1';

    nextSlide.style.transform = 'translateX(0)';
    nextSlide.style.zIndex = '1';

    currentSlide.classList.remove('is-active');
    nextSlide.classList.add('is-active');

    const olderIndex = slides.indexOf(currentSlide) - 1;
    let olderSlide = olderIndex >= 0 ? slides[olderIndex] : slides[3];
    olderSlide.style.transform = 'translateX(100%)';
    olderSlide.style.zIndex = '0';
    console.log(slides.indexOf(olderSlide), olderSlide);
}

const buttonNext = document.querySelector('.dropslider-controllers__next');
const dropsliderItems = document.querySelectorAll('.dropslider__item');
const slides = Array.from(dropsliderItems);

buttonNext.addEventListener('click', () => {
    let currentSlide = document.querySelector('.is-active');
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

