const inputUser = document.getElementById("userInput");
const btn = document.getElementById('btn');
const display = document.getElementById('result');
const attemptsEl = document.getElementById('attempts');
const newGameBtn = document.getElementById('newGameBtn');

let randomNumber = Math.floor(Math.random() * 10) + 1;

let attempts = 0


btn.addEventListener("click", function () {
    let userGuess = Number(inputUser.value);
    attempts ++;
    attemptsEl.innerHTML = `Attempts: ${attempts}`;

    if(userGuess === randomNumber){
       display.innerHTML = `🎉 You Win! <br> Computer number was: ${randomNumber}`
    }else{
       display.innerHTML = ` Lost Try Again <br> Computer number was: ${randomNumber} `
    }
    
});

newGameBtn.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    attempts = 0;

    attemptsEl.innerHTML = `Attempts:${attempts}`;
    display.innerHTML = "";
    inputUser.value = "";
})