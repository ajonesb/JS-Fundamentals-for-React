/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various object manipulation techniques in JavaScript.
 * It imports functions from the `objects` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to create, access, modify, iterate, and manipulate objects.
 */

import { createObject } from './01-object-creation.js';
import { accessProperties } from './02-accessing-properties.js';
import { iterateObjectProperties } from './03-iterating-over-objects.js';
import { nestedObjectExample } from './04-nested-objects.js';
import { personWithMethods } from './05-object-methods.js';
import { objectDestructuring } from './06-object-destructuring.js';
import { objectSpreadOperator } from './07-object-spread-operator.js';
import { freezeAndSealExample } from './08-object-freeze-seal.js';
import { objectKeysValuesEntries } from './09-object-keys-values-entries.js';
import { mergeObjects } from './10-object-assign.js';

// Call the functions for demonstration
console.log(createObject());
console.log(accessProperties({ make: "Toyota", model: "Corolla", year: 2021 }));
console.log(iterateObjectProperties({ make: "Toyota", model: "Corolla", year: 2021 }));
console.log("User's city:", nestedObjectExample({ name: "Alice", address: { street: "123 Main St", city: "New York" } }));
console.log(personWithMethods());
console.log(objectDestructuring({ name: "Alice", age: 30 }));
console.log(objectSpreadOperator({ name: "Alice", age: 30 }, { city: "New York" }));
console.log(freezeAndSealExample({ name: "Alice", age: 30 }));
console.log(objectKeysValuesEntries({ name: "Alice", age: 30 }));
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of various object manipulation techniques in JavaScript by importing and calling
 * functions from the `objects` directory.
 * It covers a wide range of topics including object creation, property access, modification, iteration, and advanced manipulation techniques.
 * This comprehensive overview helps in understanding how to effectively use objects in JavaScript,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
