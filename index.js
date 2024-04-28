const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');

const counter = document.getElementById('display');
let timerId;
let isPlayMode = false;

const updateDisplayedValue = (initial) => {
  counter.innerText = ++initial;
};

const startPauseCounter = (e) => {
  e.preventDefault();
  isPlayMode = !isPlayMode;
  if (isPlayMode) {
    startButton.innerText = 'Pause';
    timerId = setInterval(() => updateDisplayedValue(counter.innerText), 1000);
  } else {
    startButton.innerText = 'Start';
    clearInterval(timerId);
  }
};

const stopCounter = (e) => {
  e.preventDefault();
  clearInterval(timerId);
  isPlayMode = false;
  startButton.innerText = 'Start';
};

startButton.addEventListener('click', startPauseCounter);
stopButton.addEventListener('click', stopCounter);
