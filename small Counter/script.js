let startMinutes = 0;
let startSeconds = 10;
let timer = null;
let isRunning = false;
const count = document.getElementById("countdown");
const btn = document.getElementById('startBtn');
const pause = document.getElementById('pauseBtn');
const reset = document.getElementById('resetBtn');


totalSeconds = (startMinutes * 60) + startSeconds;

btn.addEventListener("click", function () {
    if(isRunning === false){
        timer = setInterval(updateCountdown, 1000);
        isRunning = true;
    }
});

pause.addEventListener("click", function () {
    if(isRunning){
        clearInterval(timer)
        isRunning = false
    }
})

reset.addEventListener("click", function () {
    clearInterval(timer);
    isRunning = false;
    totalSeconds = (startMinutes * 60) + startSeconds;
    updateDisplay();
})


function updateCountdown(){

    if(totalSeconds < 0){
        clearInterval(timer)
        count.innerHTML ="Time Over";
        return;
    }
    updateDisplay();
    totalSeconds--;

}
function updateDisplay () {
     let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    let displaySeconds = seconds < 10 ? '0' + seconds : seconds;

    count.innerHTML = `${minutes}:${displaySeconds}`;
}