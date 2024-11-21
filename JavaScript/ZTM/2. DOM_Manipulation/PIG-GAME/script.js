"use strict";

// Selecting the element
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");

// Selecting the dice:
const diceEl = document.querySelector(".dice");

score0El.textContent = 0; // Specifying the number not the string -> Js will automatically convert to a String to display on the screen
score1El.textContent = 0;
diceEl.classList.add("hidden"); // Note using the dot notation
