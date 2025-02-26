'use strict';
/* eslint-disable */
const logo = document.querySelector('.logo');

const promise1 = new Promise((resolve, reject) => {
  logo.addEventListener('click', () => {
    resolve();
  });
});

promise1.then(() => {
  const div = document.createElement('div');
  div.classList.add('message');
  div.textContent = 'Обіцянку вирішено!';
  document.body.appendChild(div);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

promise2.catch(() => {
  const div = document.createElement('div');
  div.classList.add('message', 'error-message');
  div.textContent = 'Обіцянку  не вирішено!';
  document.body.appendChild(div);
});
