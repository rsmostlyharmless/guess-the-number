'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let scoreCounter = 0;
let highScore = 0;

const display = function (message) {
    document.querySelector(`.message`).textContent = message;
};

const box = function (content) {
    document.querySelector(`.number`).textContent = content;
};

const scoreNum = function (num) {
    document.querySelector(`.score`).textContent = num;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
    const guess = document.querySelector(`.guess`).value;

    // no guess
    if (!guess) {
        display(`🙈 Input a number! 🙈`);

        // correct guess
    } else if (guess == secretNumber) {
        display(`🎉 Correct Number! 🎉`);
        box(secretNumber);
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
            scoreNum(score);
        } else {
            scoreCounter = scoreCounter - scoreCounter;
            display(`☠️ You Lose! ☠️`);
            box(`☠️`);
            document.querySelector(`.score-counter`).textContent = scoreCounter;
            scoreNum(0);
            document.querySelector(`body`).style.backgroundColor = `#d31414`;
        }
    }
});
// reset game
document.querySelector(`.again`).addEventListener(`click`, function () {
    score = 5;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    display(`Start guessing...`);
    box(`?`);
    scoreNum(score);
    document.querySelector(`.number`).style.width = `15rem`;
    document.querySelector(`.guess`).value = '';
    document.querySelector(`body`).style.backgroundColor = `#222`;
});
