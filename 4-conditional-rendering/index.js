/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various conditional rendering techniques in JavaScript.
 * It imports functions from the `conditional-rendering` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to use different types of conditional rendering, 
 * from basic ternary operators to advanced logical conditions.
 */

import { checkLoginStatus } from './01-ternary-operator.js';
import { checkUserRole } from './02-logical-operators.js';
import { checkAdminVerification } from './03-multiple-conditions.js';
import { getAgeMessage } from './04-ternary-operator-advanced.js';
import { getUserStatus } from './05-conditional-logic.js';

// Call the functions
console.log(checkLoginStatus(true));
console.log(checkUserRole(true, true));
console.log(checkUserRole(true, false));
console.log(checkUserRole(false, false));
console.log(checkAdminVerification("admin", true));
console.log(checkAdminVerification("admin", false));
console.log(checkAdminVerification("user", true));
console.log(getAgeMessage(18));
console.log(getAgeMessage(17));
console.log(getUserStatus(true, true));
console.log(getUserStatus(true, false));
console.log(getUserStatus(false, false));

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of various conditional rendering techniques in JavaScript by importing and calling
 * functions from the `conditional-rendering` directory.
 * It covers a wide range of topics including basic ternary operators, logical operators, and handling multiple conditions.
 * This comprehensive overview helps in understanding how to effectively use conditional rendering in JavaScript,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
