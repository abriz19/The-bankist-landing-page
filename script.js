'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

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
  const scoord1 = sectionOne.getBoundingClientRect();
  console.log({ scrollX, scrollY });
  // window.scrollTo({
  //   left: scoord1.left + scrollX,
  //   top: scoord1.top + scrollY,
  //   behavior: 'smooth',
  // });
  // The above implementation is the same with the below one
  sectionOne.scrollIntoView({ behavior: 'smooth' });
});

//////////////////////////////////////////////////////
// document.querySelectorAll('.nav__link').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
document.querySelector('.nav__links').addEventListener('click', function (e) {
  const id = e.target.getAttribute('href');
  document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
});

const randomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const randomRGB = () => {
  return randomInt(0, 255);
};
const h1 = document.querySelector('h1');
// h1.firstElementChild.style.backgroundColor = 'white';

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

// document.querySelector('.nav').addEventListener('click', function (e) {
//   console.log(e.target, e.currentTarget);
//   this.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()}) `;
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   console.log(e.target, e.currentTarget);
//   this.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()}) `;
// });
// document.querySelector('.nav__item').addEventListener('click', function (e) {
//   console.log(e.target, e.currentTarget);
//   this.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()}) `;
// });
