/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various uses of the spread and rest operators in JavaScript.
 * It imports functions from the `spread-rest` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to use the spread and rest operators with arrays, objects, and in functions.
 */

import { spreadWithArrays } from './01-spread-arrays.js';
import { sum } from './02-rest-function-parameters.js';
import { spreadWithObjects } from './03-spread-objects.js';
import { mergeNestedObjects } from './04-merge-nested-objects.js';
import { Profile, App } from './05-spread-in-jsx.js';
import { restWithDestructuring } from './06-rest-with-destructuring.js';
import { restWithObjects } from './07-rest-with-objects.js';

// Call the functions for demonstration
console.log(spreadWithArrays([1, 2, 3], [4, 5]));
console.log("Sum:", sum(1, 2, 3, 4, 5));
console.log(spreadWithObjects({ name: "John", age: 30 }, { email: "john@example.com" }));
console.log(mergeNestedObjects({ name: "John", age: 30, address: { city: "New York", country: "USA" } }));
console.log(restWithDestructuring([1, 2, 3, 4, 5]));
console.log(restWithObjects({ name: "John", age: 30, email: "john@example.com" }));

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of the spread and rest operators in JavaScript by importing and calling
 * functions from the `spread-rest` directory.
 * It covers a wide range of topics including using the spread operator with arrays and objects, merging nested objects,
 * using the spread operator in JSX for React components, and using the rest operator in function parameters and destructuring.
 * This comprehensive overview helps in understanding how to effectively use the spread and rest operators in JavaScript,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
