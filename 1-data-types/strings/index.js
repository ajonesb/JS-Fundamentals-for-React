/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various string manipulation techniques in JavaScript.
 * It imports functions from the `strings` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to work with strings, perform basic operations, use common methods, and handle advanced scenarios.
 */

import { basicStringOperations } from './01-basic-operations.js';
import { stringLength } from './02-string-length.js';
import { toUpperCase, toLowerCase } from './03-upper-lower-case.js';
import { splitString } from './04-splitting-strings.js';
import { trimString } from './05-trimming-strings.js';
import { replaceSubstring } from './06-replacing-substrings.js';
import { includesSubstring } from './07-checking-substrings.js';
import { reverseString } from './08-reversing-strings.js';
import { indexOfSubstring } from './09-finding-index.js';
import { padString } from './10-padding-strings.js';
import { repeatString } from './11-repeating-strings.js';
import { templateLiterals } from './12-template-literals.js';

// Call the functions for demonstration
console.log(basicStringOperations("Hello, World!", "Alice"));
console.log("Length:", stringLength("Hello, World!"));
console.log("Uppercase:", toUpperCase("Hello, World!"));
console.log("Lowercase:", toLowerCase("Hello, World!"));
console.log("Words:", splitString("Hello, World!", " "));
console.log("Trimmed:", trimString("  Hello, World!  "));
console.log("Replaced:", replaceSubstring("Hello, World!", "World", "Alice"));
console.log("Includes 'Hello':", includesSubstring("Hello, World!", "Hello"));
console.log("Reversed:", reverseString("Hello, World!"));
console.log("Index of 'World':", indexOfSubstring("Hello, World!", "World"));
console.log("Padded:", padString("Hello", 10, "*"));
console.log("Repeated:", repeatString("Hello", 3));
console.log(templateLiterals("Alice", 30));

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of various string manipulation techniques in JavaScript by importing and calling
 * functions from the `strings` directory.
 * It covers a wide range of topics including basic string operations, common string methods, splitting and replacing strings,
 * trimming whitespace, using template literals, and advanced string methods.
 * This comprehensive overview helps in understanding how to effectively use strings in JavaScript,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
