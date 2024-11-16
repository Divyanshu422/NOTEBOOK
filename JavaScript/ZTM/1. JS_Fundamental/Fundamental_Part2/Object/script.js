//! Object

// const person = {
//   name: "Alice",
//   age: 30,
//   isEmployed: true,
//   greet: function () {
//     console.log("Hello, my name is " + this.name);
//   },
// };

// // Accessing properties
// console.log(person.name); // Output: Alice
// console.log(person["age"]); // Output: 30

// // Adding a property
// person.hobby = "Reading";

// // Updating a property
// person.age = 31;

// // Deleting a property
// delete person.isEmployed;

// // Calling a method
// person.greet(); // Output: Hello, my name is Alice

// * =============*****************================

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1995,
//   age: 29,
//   job: "teacher",
//   hobbies: ["reading", "teaching"],
//   friend: ["Michael", "John", "Divyanshu"],
// };

// // * Adding the property using dot and Bracket
// jonas.location = "Berlin";
// jonas["twitter"] = "@jonasschmedtmann";
// console.log(
//   `${jonas.firstName} has ${jonas.friend.length} friends, and his best friend is ${jonas.friend[0]}`
// );
// //* Jonas has 3 friends, and his best friend is Michael

// * ----------------**************----------------**************----------------

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1995,
//   age: 29,
//   job: "teacher",
//   hobbies: ["reading", "teaching"],
//   friend: ["Michael", "John", "Divyanshu"],
// };

// const interestedIn = prompt(
//   "what would you like to about jonas -> firstName, lastName, age, job, friend"
// );
// // console.log(jonas.interestedIn) -> will give undefined

// // * We known in javaScript -> undefined is falsy value hence can be used with conditional statement
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log("wrong request!");
// }

// * ----------------**************----------------**************----------------

// console.log(typeof function () {}); // function

// let sayHello = function () {
//   console.log("Hello!");
// };

// function doSomething(action) {
//   action();
// }
// doSomething(sayHello); // Hello!

//* ----------------**************----------------**************----------------

// Assinging the function to the object
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1995,
//   age: 29,
//   job: "teacher",
//   hobbies: ["reading", "teaching"],
//   friend: ["Michael", "John", "Divyanshu"],

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
// };

// console.log(jonas.calcAge()); //* 42
// console.log(jonas.age); //* 42
// console.log(jonas.age); //* 42
