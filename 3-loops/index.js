/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various loop constructs in JavaScript.
 * It imports functions from the `loops` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to use different types of loops,
 * from basic for loops to advanced array iteration methods.
 */

import { printNumbers } from './01-for-loop.js';
import { loopOverArray } from './02-loop-over-array.js';
import { nestedLoops } from './03-nested-loops.js';
import { breakAndContinue } from './04-break-continue.js';
import { loopOverObject } from './05-loop-over-object.js';
import { loopOverString } from './06-loop-over-string.js';
import { whileLoop } from './07-while-loop.js';
import { doWhileLoop } from './08-do-while-loop.js';
import { loopOverSet } from './09-loop-over-set.js';
import { loopOverMap } from './10-loop-over-map.js';
import { loopWithArrayMethods } from './11-loop-over-array-methods.js';

// Call the functions
printNumbers();
loopOverArray();
nestedLoops();
breakAndContinue();
loopOverObject();
loopOverString();
whileLoop();
doWhileLoop();
loopOverSet();
loopOverMap();
loopWithArrayMethods();

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of various loop constructs in JavaScript by importing and calling
 * functions from the `loops` directory.
 * It covers a wide range of topics including basic for loops, while and do-while loops,
 * looping over arrays, objects, strings, sets, and maps, and using array iteration methods.
 * This comprehensive overview helps in understanding how to effectively use loops in JavaScript,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
