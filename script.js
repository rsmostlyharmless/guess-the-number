'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let scoreCounter = 0;
let highScore = 0;

const display = function (message) {
    document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
    const guess = document.querySelector(`.guess`).value;

    // no guess
    if (!guess) {
        display(`🙈 Input a number! 🙈`);

        // correct guess
    } else if (guess == secretNumber) {
        display(`🎉 Correct Number! 🎉`);
        document.querySelector(`.number`).textContent = secretNumber;
        document.querySelector(`body`).style.backgroundColor = `#60b347`;
        document.querySelector(`.number`).style.width = `30rem`;

        if (score) {
            scoreCounter = scoreCounter + score;
            document.querySelector(`.score-counter`).textContent = scoreCounter;
        }

        if (scoreCounter > highScore) {
            highScore = scoreCounter;
            document.querySelector(`.highscore`).textContent = highScore;
        }

        // guess is wrong
    } else if (guess != secretNumber) {
        if (score > 1) {
            display(guess > secretNumber ? `👆 Too High! 👆` : `👇 Too Low! 👇`);
            score--;
            document.querySelector(`.score`).textContent = score;
        } else {
            scoreCounter = scoreCounter - scoreCounter;
            document.querySelector(`.score-counter`).textContent = scoreCounter;
            display(`☠️ You Lose! ☠️`);
            document.querySelector(`.score`).textContent = 0;
            document.querySelector(`body`).style.backgroundColor = `#d31414`;
            document.querySelector(`.number`).textContent = `☠️`;
        }
    }
});
// reset game
document.querySelector(`.again`).addEventListener(`click`, function () {
    score = 5;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    display(`Start guessing...`);
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.number`).style.width = `15rem`;
    document.querySelector(`.guess`).value = '';
    document.querySelector(`body`).style.backgroundColor = `#222`;
});
