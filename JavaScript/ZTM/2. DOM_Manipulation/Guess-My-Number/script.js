'use strict';

// Execution is from left to right.
// the querySelector is used to select the element with class as message and textContent is used to get the content of the element which is selected.
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';

// document.querySelector('.score').textContent = '09 ';
// console.log(document.querySelector('.highscore').textContent);
// document.querySelector('.number').textContent = 13;
// console.log(document.querySelector('.guess').value);

// * Implementing the functionality for the game

//* STEP 2: Defining the secret number

const randomNumber = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = randomNumber;

//* STEP 1: adding the event listner to the button on the UI

document.querySelector('.check').addEventListener('click', () => {
  const guessNumber = Number(document.querySelector('.guess').value);
  console.log(typeof guessNumber);

  // Adding the corner cases ->
  // case 1: if there is no guess number and user clicked on the button
  if (!guessNumber) {
    document.querySelector('.message').textContent = '⛔️ Enter the number ';
  }
});
