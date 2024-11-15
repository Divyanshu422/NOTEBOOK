// * Understanding strinct mode in js
/*
"use strict";
let hasDriversLicense = false;
const passTest = false;

if (passTest) {
  hasDriversLicense = true;
  console.log("You passed the test!");
} else {
  throw new Error("You must pass the test to get a driver's license.");
}
*/

// * Function in JavaScript:

/*
function functionName(parameters) {
  // Function body
  return value; // (optional)
}

functionName(); // Invoking the function
*/

// * Function expression with internal name which is used for recursion

// const greet = function sayHello(param) {
//   console.log(`Hello ${param}`);
//     //! the sayHello is used for recursion not for calling/Invoking the function
// };

//* Function expression -> without internal name
/*
const greet = function (param) {
  console.log(`Hello My Friend ${param}`);
};
sayHello("John"); 
*/

// ! Error
const greet = function sayHello(param) {
  console.log(`Hello My Friend ${param} -> welcome back!! `);
};
sayHello("John"); //! Error

//* sayHello is the internal name of the function hence
//* cant be used to call the function -> can be used for recursive calls
