//* For each used for iterating over the array:

// let arrData = [6, 10, 20, 14];
// let sum = 0;

// const sumArray = function (item) {
//   sum += item;
// };

// arrData.forEach(sumArray); // Passing the reference of sumArray

// console.log("the sum result is ", sum); // * the sum result is  50

// --------------------------------------------------------------------

//* ForEach using callBack and Anonymous function -> doesnot return anything

let arrData = [6, 10, 20, 14];

// const doubleData = arrData.forEach((item) => {
//   return 2 * item;
// });
// console.log("the double data is ", doubleData); //the double data is  undefined

//! Anonymous function:

// let tripleData = [];
// arrData.forEach(function (item) {
//   tripleData.push(3 * item);
// });
// console.log(tripleData); // [18, 30, 60, 42];

// ---------------------

let arrData2 = [6, 10, 20, 14];

arrData2.forEach((item, index) => {
  arrData2[index] = 2 * item;
});
console.log("the double data is ", arrData2); //  [ 12, 20, 40, 28 ]
