// * list of products which is array of object. each object represent a product which has name and type

var products = [
  { name: "cucumber", type: "vegetable" },
  { name: "carrot", type: "vegetable" },
  { name: "apple", type: "fruit" },
  { name: "banana", type: "fruit" },
];

// Implementing the logic using traditional for loop
let filteredProduct = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    filteredProduct.push(products[i]);
  }
}

const fruitProduct = products.filter((product) => {
  return product.type === "fruit";
});
console.log(fruitProduct);
console.log(filteredProduct);
