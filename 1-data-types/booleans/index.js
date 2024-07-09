/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various boolean handling techniques in JavaScript.
 * It imports functions from the `booleans` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to use boolean values, comparison operators, and logical operators.
 */

import { basicBooleanValues } from './01-basic-boolean-values.js';
import { comparisonOperators } from './02-comparison-operators.js';
import { logicalOperators } from './03-logical-operators.js';
import { welcomeUser } from './04-conditional-statements.js';
import { welcomeAdmin } from './05-combined-logical-operators.js';
import { canAccessContent } from './06-practical-use-case.js';

// Call the functions for demonstration
console.log(basicBooleanValues());
console.log(comparisonOperators(10, 5));
console.log(logicalOperators(true, false));
console.log(welcomeUser(true));
console.log(welcomeAdmin(true, true));
console.log(canAccessContent(true, true));

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of various boolean handling techniques in JavaScript by importing and calling
 * functions from the `booleans` directory.
 * It covers a wide range of topics including basic boolean values, comparison operators, logical operators, and practical use cases.
 * This comprehensive overview helps in understanding how to effectively use booleans in JavaScript,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
