// * Understanding strinct mode in js

// "use strict";
// let hasDriversLicense = false;
// const passTest = false;

// if (passTest) {
//   hasDriversLicense = true;
//   console.log("You passed the test!");
// } else {
//   throw new Error("You must pass the test to get a driver's license.");
// }

//* =================**************************======================

// * Function in JavaScript:

// function functionName(parameters) {
//   // Function body
//   return value; // (optional)
// }

// functionName(); // Invoking the function

//* =================**************************======================

// * Function expression with internal name which is used for recursion

// const greet = function sayHello(param) {
//   console.log(`Hello ${param}`);
//   //! the sayHello is used for recursion not for calling/Invoking the function
// };
// sayHello("John");

//* =================**************************======================
//* Function expression -> without internal name

// const greet = function (param) {
//   console.log(`Hello My Friend ${param}`);
// };
// sayHello("John");

//* =================**************************======================
// ! Error -> since we are invoking the function using the internal name

// const greet = function sayHello(param) {
//   console.log(`Hello My Friend ${param} -> welcome back!! `);
// };
// sayHello("John"); //! Error

// //* sayHello is the internal name of the function hence
// //* cant be used to call the function -> can be used for recursive calls

//* =================**************************======================

// ! In JavaScript, if a function is called with fewer arguments than the number of parameters defined, the parameters that do not receive a value are automatically assigned the value undefined.
// const greet = function (param1, param2, param3) {
//   console.log(`Hello ${param1}, ${param2}, ${param3}`); //* Hello John, Doe, undefined
// };

// greet("John", "Doe"); // invoking the function with arguments
//* =================**************************======================

//!     What is typeof the function
// console.log(typeof function () {}); //* function

//* =================**************************======================

//! Function calling the function:

// const cutFruitPieces = function (fruit) {
//   return 4 * fruit;
// };

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple and ${orangePieces} oranges is ready`;
//   return juice;
// }

// console.log(fruitProcessor(5, 3)); //* Juice with 20 apple and 12 oranges is ready

//* =================**************************======================
//! Function calling the function:
// function outerFunction() {
//   function innerFunction(greeting) {
//     return `${greeting}, ${name}!`; // 'name' is not defined in any accessible scope
//   }
//   console.log(innerFunction("Hello"));
// }

// outerFunction(); // ReferenceError: name is not defined

//* =================**************************======================
//! Function calling the function:
// function outerFunction(name) {
//   function innerFunction(greeting) {
//     return `${greeting}, ${name}!`;

//   }
//   console.log(innerFunction("Hello")); // ! Hello, undefined!
// }

// // Call the outer function
// outerFunction();

//* =================**************************======================
//! Exam Module

const checkWinner = (avgScore1, avgScore2) => {
  if (avgScore1 > 2 * avgScore2) {
    return `Dolphin wins 🏆 (${avgScore1} vs. ${avgScore2})`;
  } else if (avgScore1 * 2 < avgScore2) {
    return `Koalas wins 🏆 (${avgScore2} vs. ${avgScore1} )`;
  } else {
    return `No Team wins`;
  }
};
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dolphinScore = calcAverage(85, 54, 41);
const koalaScore = calcAverage(23, 34, 27);

console.log(checkWinner(dolphinScore, koalaScore));
