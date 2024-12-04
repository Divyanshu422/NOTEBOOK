# Note 1:

- When you want to run a JavaScript file in the Node.js environment from your IDE or terminal, you use the node command followed by the file name.
- for example: to execute the main.js file, the command used is:
  - `node main.js`

# Global Object:

- The global object is provided by the environment (Node.js or browser) and is not part of the V8 engine itself.
  - V8 only handles the JavaScript runtime and language features. The environment adds global objects specific to its context (e.g., global in Node.js, window in browsers).
- It contains methods and properties accessible within the environment, such as `setTimeout` and `console.log` in Node.js.
- to access global object 2 keywords are used -> `global` or `globalThis`

## globalThis

- The universal keyword to access the global object in browser and node.js
- This keyword was introduced in 2020. to overcome the discrepancies/inconsistencies with different words for accessing the global object
