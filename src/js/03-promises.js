import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const delay = document.querySelector('[name=delay]');
const step = document.querySelector('[name=step]');
const amount = document.querySelector('[name=amount]');
let position = 0;
let timer = 'null';
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const firsrTimer = setTimeout(() => {
    for (let i = 0; i < amount.value; i += 1) {
      const s = +delay.value + +step.value * i;
      position = i;
      createPromise(position, s)
        .then(({ position, delay }) => {
          Notiflix.Notify.success(
            `Fulfilled promise ${position + 1} in ${delay} ms`
          );
        })
        .catch(({ position, delay }) => {
          Notiflix.Notify.failure(
            `Rejected promise ${position + 1} in ${delay} ms`
          );
        });
    }
  }, delay.value);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  return promise;
}
