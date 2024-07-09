/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various array manipulation techniques in JavaScript.
 * It imports functions from the `arrays` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to create, manipulate, and iterate over arrays.
 */

import { createArray } from './01-create-array.js';
import { addElement } from './02-add-element.js';
import { accessElement } from './03-access-element.js';
import { removeElement } from './04-remove-element.js';
import { iterateArray } from './05-iterate-array.js';
import { commonArrayMethods } from './06-common-array-methods.js';
import { mapFilterReduce } from './07-map-filter-reduce.js';
import { arrayOfObjects } from './08-array-of-objects.js';

// Call the functions for demonstration
console.log(createArray());
console.log(addElement(["Apple", "Banana", "Cherry"], "Orange"));
console.log("First fruit:", accessElement(["Apple", "Banana", "Cherry"], 0));
console.log(removeElement(["Apple", "Banana", "Cherry", "Orange"]));
iterateArray(["Apple", "Banana", "Cherry"]);
console.log(commonArrayMethods());
console.log(mapFilterReduce([1, 2, 3, 4, 5]));
console.log(arrayOfObjects());

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of various array manipulation techniques in JavaScript by importing and calling
 * functions from the `arrays` directory.
 * It covers a wide range of topics including creating arrays, adding and removing elements, accessing elements by index,
 * iterating over arrays, and using common array methods.
 * This comprehensive overview helps in understanding how to effectively use arrays in JavaScript,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
