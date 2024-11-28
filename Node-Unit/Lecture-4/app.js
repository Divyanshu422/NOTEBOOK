let { calculateSum, x } = require("./calculateFile"); // importing calculateSum

console.log("this is app.js file");
let a = 10;
let b = 20;

calculateSum(a, b);
console.log(x);

x = 40;
require("./calculateFile");
console.log(x);
