/**
 * Importing Modules
 * 
 * Demonstrates how to import functions from other modules.
 */

import { add, subtract } from './01-basic-exports.js';
import { multiply, divide } from './02-named-exports.js';
import defaultFunction from './03-default-export.js';

// Instantiate and call
console.log("Addition:", add(2, 3));
console.log("Subtraction:", subtract(5, 2));
console.log("Multiplication:", multiply(2, 3));
console.log("Division:", divide(6, 2));
console.log("Exponentiation:", defaultFunction(2, 3));

/**
 * Summary:
 * 
 * This module demonstrates how to import functions from other modules using both named and default imports.
 */
