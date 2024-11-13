// If else block

// const age = 15;
// if (age >= 18) {
//   console.log(`you are old enough for getting driving license 🚗`);
// } else {
//   let yearLeft = 18 - age;
//   console.log(`You are too young. Wait for ${yearLeft} year to get License`);
// }

// Control statement > Finding the birthCentury

// const birthYear = 1995;
// // ! wrong:
// // const century = Number(1995 / 100) + 1; -> answer is float
// const century = Math.floor(1995 / 100) + 1;
// console.log(`the century in which agent is born is ${century}`);
// // * the century in which agent is born is 20

// ! Type conversion

// const inputYear = "1998"; // String
// console.log(inputYear + 18); // it will not add 18 to inputYear rather will concatenate the 18 to the years
// * Output is 199818

// Adding the number -> Type conversion
// console.log(Number(inputYear) + 18); // 2016

// * Converting a string which is not a number to a number
console.log(Number("Divyanshu")); // ! will not throw the error -> rather give output as NaN
// NaN -> Not a number

console.log(typeof NaN); // Number

// Type Coercion
console.log("44" + 22); // 4422
console.log("Divyanshu" + 22); // Divyanshu22
console.log(44 + "22"); // 4422
console.log(22 + 44); // 66

console.log("55" - 33); //  22 -> The Minus converts it into Number
console.log("Divyanshu" - 11); // NaN

console.log("23" * "3"); // 69 -> The multiplication converts it into Number
console.log("Divyanshu" * "3"); // NaN
console.log("Divyanshu" * 3); // NaN

let n = "1" + 1;
n = n - 1;
console.log(n); // 10
console.log(2 + 3 + 4 + "5" + 9 + 7); // 9597
console.log(12 - "3" - "4" + "5" - 9 + 7); // 53 ->  12 - 7 => 5 + '5' - 2 => 55- 2 => 53
