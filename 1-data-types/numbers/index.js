/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various number manipulation techniques in JavaScript.
 * It imports functions from the `numbers` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to work with numbers, perform arithmetic operations, use the Math object, and handle precision.
 */

import { basicArithmetic } from './01-basic-arithmetic.js';
import { mathOperations } from './02-math-object.js';
import { generateRandomNumber } from './03-random-number.js';
import { checkNaN } from './04-isnan-check.js';
import { convertStringToNumber } from './05-string-to-number.js';
import { formatDecimal } from './06-fixed-decimal-places.js';
import { numberMethods } from './07-number-methods.js';
import { numberProperties } from './08-number-properties.js';

// Call the functions for demonstration
console.log(basicArithmetic(10, 3));
console.log(mathOperations(5.6));
console.log("Random number:", generateRandomNumber());
console.log(checkNaN("Hello"));
console.log(convertStringToNumber("10.5"));
console.log("Tax:", formatDecimal(99.99 * 0.1, 2));
console.log(numberMethods("123.456"));
console.log(numberProperties());

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of various number manipulation techniques in JavaScript by importing and calling
 * functions from the `numbers` directory.
 * It covers a wide range of topics including basic arithmetic, Math object methods, random number generation, checking for NaN,
 * string to number conversion, formatting numbers to fixed decimal places, and number properties.
 * This comprehensive overview helps in understanding how to effectively use numbers in JavaScript,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
