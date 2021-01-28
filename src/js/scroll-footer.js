import animateScrollTo from 'animated-scroll-to';

const authorBtnEl = document.getElementById('author-scroll');
const contactsBtnEl = document.getElementById('contacts-scroll');
const authorSectionEl = document.getElementById('author');
const contactsSectionEl = document.getElementById('contacts');

authorBtnEl.addEventListener('click', scrollFn);

contactsBtnEl.addEventListener('click', scrollFnTwo);

function scrollFn(e) {
  e.preventDefault();
  animateScrollTo(authorSectionEl);
}
function scrollFnTwo(e) {
  e.preventDefault();
  animateScrollTo(contactsSectionEl);
}
