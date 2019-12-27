const dropslider = document.querySelectorAll('.dropslider');
const dropsliderItems = document.querySelectorAll('.dropslider__item');


dropsliderItems.forEach(
    item => item.getAttribute('aria-hidden') === true ? console.log('T') : console.log('F')
);

// console.log(dropsliderItems[0].getAttribute('aria-hidden'));