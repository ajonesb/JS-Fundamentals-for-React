/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various switch statement techniques in JavaScript.
 * It imports functions from the `switch-statements` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to use switch statements for handling multiple cases based on a variable's value.
 */

import { getUserRoleMessage } from './01-user-roles.js';
import { getUserTypeMessage } from './02-user-types.js';
import { getDayMessage } from './03-days-of-week.js';
import { getErrorMessage } from './04-error-codes.js';
import { getProductTypeMessage } from './05-product-types.js';
import { getEventTypeMessage } from './06-event-types.js';

// Call the functions
console.log(getUserRoleMessage("admin"));
console.log(getUserRoleMessage("editor"));
console.log(getUserRoleMessage("subscriber"));
console.log(getUserRoleMessage("guest"));

console.log(getUserTypeMessage("premium"));
console.log(getUserTypeMessage("standard"));
console.log(getUserTypeMessage("guest"));

console.log(getDayMessage("Monday"));
console.log(getDayMessage("Wednesday"));
console.log(getDayMessage("Friday"));

console.log(getErrorMessage(404));
console.log(getErrorMessage(500));
console.log(getErrorMessage(123));

console.log(getProductTypeMessage("electronics"));
console.log(getProductTypeMessage("clothing"));
console.log(getProductTypeMessage("furniture"));

console.log(getEventTypeMessage("conference"));
console.log(getEventTypeMessage("workshop"));
console.log(getEventTypeMessage("webinar"));

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of various switch statement techniques in JavaScript by importing and calling
 * functions from the `switch-statements` directory.
 * It covers a wide range of topics including handling user roles, user types, days of the week, error codes, product types, and event types.
 * This comprehensive overview helps in understanding how to effectively use switch statements in JavaScript,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
