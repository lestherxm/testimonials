import { testimonials } from './data.js';
const currentPhoto = document.querySelector('.current-photo');
const currentName = document.querySelector('.current-name');
const currentPuntuation = document.querySelector('.current-puntuation');
const currentTestimonial = document.querySelector('.current-testimonial');
const btnBackward = document.querySelector('.btn-backward');
const btnForward = document.querySelector('.btn-forward');
let currentIndex = 0;

function goForward() {
    currentIndex++;
    if (currentIndex >= testimonials.length) {
        currentIndex = 0;
    }
    showTestimonial();
}

function goBackward() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1;
    }
    showTestimonial();
}

async function showTestimonial() {
    const show = testimonials[currentIndex];
        currentPhoto.setAttribute('src', show.photo);
        currentName.innerHTML = show.name;
        switch (show.puntuation) {
            case 1: currentPuntuation.innerHTML = '⭐'; break;
            case 2: currentPuntuation.innerHTML = '⭐⭐'; break;
            case 3: currentPuntuation.innerHTML = '⭐⭐⭐'; break;
            case 4: currentPuntuation.innerHTML = '⭐⭐⭐⭐'; break;
            case 5: currentPuntuation.innerHTML = '⭐⭐⭐⭐⭐'; break;
        }
        currentTestimonial.innerHTML = show.testimonial;
}

btnBackward.addEventListener('click', goBackward);
btnForward.addEventListener('click', goForward);

showTestimonial();