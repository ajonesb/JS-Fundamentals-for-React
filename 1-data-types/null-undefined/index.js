/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various techniques for handling null and undefined in JavaScript.
 * It imports functions from the `null-undefined` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to work with null and undefined values.
 */

import { undefinedVariable } from './01-undefined-variable.js';
import { nullVariable } from './02-null-variable.js';
import { checkUndefined } from './03-check-undefined.js';
import { checkNull } from './04-check-null.js';
import { nullishCoalescing } from './05-nullish-coalescing-operator.js';
import { advancedNullishCoalescing } from './06-advanced-nullish-coalescing.js';

// Call the functions for demonstration
console.log("Undefined:", undefinedVariable());
console.log("Null:", nullVariable());
console.log(checkUndefined(undefined));
console.log(checkNull(null));
console.log("Username:", nullishCoalescing(null, "Guest"));
console.log(advancedNullishCoalescing({ name: "John", age: 25 }));

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of various techniques for handling null and undefined in JavaScript by importing and calling
 * functions from the `null-undefined` directory.
 * It covers a wide range of topics including basic understanding of null and undefined, checking for their values, and using the nullish coalescing operator.
 * This comprehensive overview helps in understanding how to effectively handle variables without values in JavaScript,
 * which is fundamental for building robust and reliable code in JavaScript and React applications.
 */
