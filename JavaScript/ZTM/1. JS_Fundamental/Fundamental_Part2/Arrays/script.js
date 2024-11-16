//! Array Declaration:

// const friend = ["Divyanshu", "Piyush", "Navjot"];
// console.log(friend); // [ 'Divyanshu', 'Piyush', 'Navjot' ]

// const friendArr2 = new Array("Manisha", "Ayushi", "Jeet");
// console.log(friendArr2[2]); // Jeet

// const mixedArray = Array.of(1, "hello", true);
// console.log(mixedArray); // Output: [1, "hello", true]

// const str = "hello! Divyanshu Good Morning";
// const arrFromString = Array.from(str);
// console.log(arrFromString);

// * =============***************==================

// ! length property:

// const arr = ["Divyanshu", "Piyush", "Navjot"];

// console.log(arr.length); // * 3

// * =============***************==================

//! modifying the array is allowed with const but re-referencing is not allowed
// const arr = [1, 2, 3];
// arr.push(4); // Allowed: modifying the array
// console.log(arr); // Output: [1, 2, 3, 4]

// arr = [5, 6]; // ! Error: Assignment to constant variable (reference cannot change)

// * =============***************==================

// const friend = ["Divyanshu", "Piyush", "Navjot"];
// const firstName = "Jonas";
// const calcAge = function (birthYear) {
//   return 2024 - birthYear;
// };

// const johas = [firstName, "Schmedtmann", calcAge(1991), friend];

// console.log(johas);

// * =============***************==================

// ! Method on the array:
// const friend = ["Divyanshu", "Piyush", "Navjot"];

// console.log(friend.push("Shivam")); // * 4
// console.log(friend); // * [ 'Divyanshu', 'Piyush', 'Navjot', 'Shivam' ]

// console.log(friend.unshift("Jeet")); // * 5
// console.log(friend); // * [ 'Jeet', 'Divyanshu', 'Piyush', 'Navjot', 'Shivam' ]

// console.log(friend.pop()); // * Shivam
// console.log(friend); // * [ 'Jeet', 'Divyanshu', 'Piyush', 'Navjot' ]

// console.log(friend.shift()); // * Jeet
// console.log(friend); // * [ 'Divyanshu', 'Piyush', 'Navjot' ]

// console.log(friend.indexOf("Divyanshu")); // 0
// console.log(friend.indexOf("Bob")); // -1

// * =============***************==================

// ! Coding Challenge: Tip calculator

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips); // * [ 18.75, 111, 8.8 ]
// const totalBill = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totalBill); //* [ 143.75, 666, 52.8 ]

// * =============***************==================
