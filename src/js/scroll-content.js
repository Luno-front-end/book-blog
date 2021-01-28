import animateScrollTo from 'animated-scroll-to';
const btnEl = document.getElementById('btnScroll');
const sectionEl = document.getElementById('section-book');

btnEl.addEventListener('click', scrollFn);

function scrollFn(e) {
  animateScrollTo(sectionEl);
}
