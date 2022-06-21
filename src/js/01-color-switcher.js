const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const logger = () =>
  (document.body.style.backgroundColor = getRandomHexColor());

let intervalId = '';

stopBtn.disabled = true;

function startChangingColors(e) {
  intervalId = setInterval(logger, 2000, 2000);
  stopBtn.disabled = false;
  startBtn.disabled = true;
}

function stopChangingColors(e) {
  clearInterval(intervalId);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}

startBtn.addEventListener('click', startChangingColors);
stopBtn.addEventListener('click', stopChangingColors);
