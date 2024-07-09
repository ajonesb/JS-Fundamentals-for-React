/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various template literal techniques in JavaScript.
 * It imports functions from the `template-literals` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to use template literals for creating dynamic strings, multiline strings, and tagged template literals.
 */

import { getUserRoleMessage } from './01-dynamic-strings.js';
import { getMultilineString } from './02-multiline-strings.js';
import { userRoleTemplate } from './03-tagged-template-literals.js';
import { getProductInfo } from './04-dynamic-product-info.js';
import { getAddress } from './05-multiline-address.js';
import { sanitize } from './06-sanitized-input.js';
import { balanceMessage } from './07-balance-message.js';

// Call the functions
console.log(getUserRoleMessage("Alice", "admin"));
console.log(getMultilineString());
console.log(userRoleTemplate`User ${"Bob"} is a ${"user"} of the system.`);
console.log(getProductInfo("Laptop", 1200));
console.log(getAddress());
console.log(sanitize`User input: ${"<script>alert('Hacked!');</script>"}`);
console.log(balanceMessage`User ${"Charlie"} has a balance of ${-50.75}, which is ${''}.`);

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of various template literal techniques in JavaScript by importing and calling
 * functions from the `template-literals` directory.
 * It covers a wide range of topics including dynamic strings, multiline strings, and tagged template literals.
 * This comprehensive overview helps in understanding how to effectively use template literals in JavaScript,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
