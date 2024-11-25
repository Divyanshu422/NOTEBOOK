const numbers = [1, 2, 3, 4];
//* Passing the callBack function
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]
console.log(numbers); // Output: [1, 2, 3, 4] (original array is not changed)

const tripleValue = function (item) {
  return 3 * item;
};

// * Passing the function
const tripleData = numbers.map(tripleValue);

console.log(tripleData); // [ 3, 6, 9, 12 ]
