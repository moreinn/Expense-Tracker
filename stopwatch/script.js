
let totalSeconds = 0;
let timer = null;
let isRunning = false;


const display = document.getElementById('countdown');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');


updateDisplay();


startBtn.addEventListener('click', function () {
    if (!isRunning) {
        timer = setInterval(function () {
            totalSeconds++;      
            updateDisplay();
        }, 1000);
        isRunning = true;
       
    }
});


pauseBtn.addEventListener('click', function () {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
        
    }
});


resetBtn.addEventListener('click', function () {
    clearInterval(timer);
    isRunning = false;
    totalSeconds = 0;
    updateDisplay();
    
});


function updateDisplay() {
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    let displaySeconds = seconds < 10 ? '0' + seconds : seconds;

    display.innerHTML = `${minutes}:${displaySeconds}`;
    
}
