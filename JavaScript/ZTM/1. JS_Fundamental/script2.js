// * String in javaScript -> Using template literal
/*
 * In JavaScript, template literals allow you to create strings that include expressions and variables
 * easily. They use backticks (`) instead of single or double quotes and support multi-line strings and
 * expression interpolation with ${...} syntax.
 */
const name = "Alice";
const age = 25;
// Template literal
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // * Hello, my name is Alice and I am 25 years old.

// Using plus sign -> Concatenation
console.log("I'm " + name + ", a " + age + " years old"); // I'm Alice, a 25 years old
// * The age is the number -> which is type coercion into string internally
