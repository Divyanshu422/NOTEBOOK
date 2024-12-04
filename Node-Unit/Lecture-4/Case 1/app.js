// app.js
let { counter, increment } = require("./calculateFile");

console.log(counter); // Output: 0
increment();
console.log(counter); // Output: 0

// Modifying the exported object directly
counter = 10;
console.log(counter); // 10
