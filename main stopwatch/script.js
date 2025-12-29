let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const display = document.querySelector('.display');
const startBtn = document.querySelector('.btn-start');
const restartBtn = document.querySelector('.btn-restart');
const stopBtn = document.querySelector('.btn-stop');

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
    }
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    display.textContent = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

function stopTimer() {
    clearInterval(timer);
    isRunning = false;
}

function restartTimer() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    display.textContent = '00:00:00';
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
restartBtn.addEventListener('click', restartTimer);