import animateScrollTo from 'animated-scroll-to';

const btnScrollUpEl = document.getElementById('goTop');
const headEl = document.getElementById('head');

window.addEventListener('scroll', trackScroll);
btnScrollUpEl.addEventListener('click', backToTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    btnScrollUpEl.classList.add('btn-up-show');
  }
  if (scrolled < coords) {
    btnScrollUpEl.classList.remove('btn-up-show');
  }
}

function backToTop() {
  if (window.pageYOffset > 0) {
    animateScrollTo(headEl);
  }
}
