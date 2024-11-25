//* For each used for iterating over the array:

let arrData = [6, 10, 20, 14];
let sum = 0;

const sumArray = function (item) {
  sum += item;
};

arrData.forEach(sumArray); // Passing the reference of sumArray

console.log("the sum result is ", sum); // * the sum result is  50
