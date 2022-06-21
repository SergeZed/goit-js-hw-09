import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const inputEl = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
let myTimer = 'null';
let d;
let CURRENT_DATE = new Date();
const daysMy = document.querySelector('[data-days]');
const hoursMy = document.querySelector('[data-hours]');
const minutesMy = document.querySelector('[data-minutes]');
const secondsMy = document.querySelector('[data-seconds]');
let myDelta;
startBtn.addEventListener('click', startTimer);
startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] < CURRENT_DATE) {
      Notiflix.Report.warning(
        'Inappropriate date',
        'Please choose a date in the future',
        'Got it. Will choose'
      );
      //   window.alert('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
      startBtn.addEventListener('click', timer(selectedDates[0]));
    }
  },
};
flatpickr('#datetime-picker', options);
function startTimer(f) {
  myTimer = setInterval(() => {
    const delta = getMyDelta();
    renderTimer(delta);
  }, 1000);
}
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
const timer = targetDate => {
  return function () {
    setInterval(() => {
      const delta = new Date(targetDate) - new Date();
      renderTimer(delta);
    }, 1000);
  };
};
const renderTimer = string => {
  let { days, hours, minutes, seconds } = convertMs(string);
  daysMy.textContent = days;
  minutesMy.textContent = minutes;
  hoursMy.textContent = hours;
  secondsMy.textContent = seconds;
};
function getMyDelta(now, future) {
  myDelta = d - CURRENT_DATE;
  return myDelta;
}
