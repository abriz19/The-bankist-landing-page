'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const sectionOne = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  sectionOne.scrollIntoView({ behavior: 'smooth' });
});

const randomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomRGB = () => {
  return randomInt(0, 255);
};
const h1 = document.querySelector('h1');

[...h1.parentElement.children].forEach(function (el) {
  if (h1 !== el) el.style.transform = 'scale(0.5)';
});

const tabContainer = document.querySelector('.operations__tab-container');
const tabs = document.querySelectorAll('.btn.operations__tab');
const tabsContent = document.querySelectorAll('.operations__content');
tabContainer.addEventListener('click', e => {
  const closestTabContent = e.target.closest('.operations__tab');
  const contentValue = closestTabContent.dataset.tab;
  [...tabs].forEach(tab => tab.classList.remove('operations__tab--active'));
  [...tabsContent].forEach(content =>
    content.classList.remove('operations__content--active')
  );
  closestTabContent.classList.add('operations__tab--active');
  document
    .querySelector(`.operations__content--${contentValue}`)
    .classList.add('operations__content--active');
});

// Make a sticky navigation
const header = document.querySelector('.header');
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) {
      document.querySelector('.nav').classList.add('sticky');
    }
    if (entry.isIntersecting) {
      document.querySelector('.nav').classList.remove('sticky');
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: '-90px',
  }
);
observer.observe(header);

// Page navigation smooth scrolling
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    id !== '#' &&
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
