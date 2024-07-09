/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various module techniques in JavaScript.
 * It imports functions from the `modules` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to use modules, including basic exports, named exports, default exports, and dynamic imports.
 */

import { add, subtract } from './01-basic-exports.js';
import { multiply, divide } from './02-named-exports.js';
import defaultFunction from './03-default-export.js';
import { loadModule } from './05-dynamic-import.js';

// Call the functions for demonstration
console.log("Addition:", add(2, 3));
console.log("Subtraction:", subtract(5, 2));
console.log("Multiplication:", multiply(2, 3));
console.log("Division:", divide(6, 2));
console.log("Exponentiation:", defaultFunction(2, 3));

// Demonstrate dynamic imports
loadModule(true);
loadModule(false);

/**
 * Summary:
 * 
 * This `index.js` file demonstrates various module techniques in JavaScript by importing and calling
 * functions from the `modules` directory.
 * It covers a wide range of topics including basic exports, named exports, default exports, and dynamic imports.
 * This comprehensive overview helps in understanding how to effectively use modules in JavaScript,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
