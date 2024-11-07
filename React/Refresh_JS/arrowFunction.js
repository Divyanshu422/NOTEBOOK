/*
  1. For single argument we can remove the parenthesis 
  2. if the arrow function does not receive any parameter on the calling then we cant remove empty parenthesis -> there shall be empty brackets like this `()`
  3. implicit return -> if there is single code of block inside the function we can remove the flower bracket and return keywords as shown below code 
*/

const myName = (name) => {
  console.log("the user name is ", name);
};

myName("Divyanshu Tyagi");

// ! Implicit return

const multiple = (number) => number * 2;

// * Calling the function
console.log("the multiple function result is", multiple(9));
// the multiple function result is 18
