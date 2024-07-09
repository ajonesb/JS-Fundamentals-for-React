/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various destructuring techniques in JavaScript.
 * It imports functions from the `destructuring` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to use destructuring for objects, arrays, function parameters, and more.
 */

import { extractPersonDetails } from './01-object-destructuring.js';
import { extractScores } from './02-array-destructuring.js';
import { printUser } from './03-function-parameters.js';
import { extractUserDetails } from './04-nested-object-destructuring.js';
import { extractColors } from './05-array-rest-operator.js';
import { swapVariables } from './06-variable-swapping.js';
import { extractSettings } from './07-default-values.js';
import { extractUserAges } from './08-loop-destructuring.js';
import { extractUser } from './09-function-return-destructuring.js';
import { extractLocation } from './10-computed-property-names.js';

// Call the functions
console.log(extractPersonDetails({ name: "John", age: 30, location: "New York" }));
console.log(extractScores([92, 85, 100]));
console.log(printUser({ name: "John", age: 30 }));
console.log(extractUserDetails({ name: "Alice", address: { city: "San Francisco", state: "CA" } }));
console.log(extractColors(["red", "green", "blue", "yellow"]));
console.log(swapVariables(1, 2));
console.log(extractSettings({ theme: "dark", fontSize: 14 }));
console.log(extractUserAges([
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
]));
console.log(extractUser());
console.log(extractLocation({ name: "John", age: 30, location: "New York" }, "location"));

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of various destructuring techniques in JavaScript by importing and calling
 * functions from the `destructuring` directory.
 * It covers a wide range of topics including object and array destructuring, function parameters, nested destructuring,
 * default values, computed property names, and more.
 * This comprehensive overview helps in understanding how to effectively use destructuring in JavaScript,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
