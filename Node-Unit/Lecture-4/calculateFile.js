console.log(
  "this is calculate file which is used to provide additional functionality"
);

const calculateSum = function (param1, param2) {
  const sum = param1 + param2;
  console.log(sum);
};

const x = 10;

// * Explicitly exporting the function: using module object
module.exports = {
  calculateSum: calculateSum,
  x: x,
};

// console.log("2nd time execution", x);
