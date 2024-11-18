// ! What is the output?
// const obj = {
//   a: 1,
//   b: 2,
//   a: 3,
// };
// console.log(obj.a);

// * ===============*****************===============

//! * What is the output

//* In javaScript, object keys are always treated as strings. Even if you define a key as a number, JavaScript will convert it to a string internally. Besides strings, JavaScript also supports symbols as object keys. Symbols are unique and are not converted to strings.

const obj = {
  1: "one",
  2: "two",
};
console.log(obj["1"]); // "one"
console.log(typeof obj[1]); // String

// * ===============*****************===============
