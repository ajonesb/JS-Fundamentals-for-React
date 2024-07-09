/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various uses of Promises and async/await in JavaScript.
 * It imports functions from the `async-await` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to use Promises and async/await for handling asynchronous operations.
 */

import { handlePromise } from './01-promises.js';
import { loadData } from './02-async-await.js';
import { handleMultiplePromises } from './03-multiple-promises.js';
import { loadMultipleData } from './04-parallel-async-await.js';
import { loadSequentialData } from './05-sequential-async-await.js';

// Call the functions for demonstration
handlePromise();
loadData();
handleMultiplePromises();
loadMultipleData();
loadSequentialData();

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of Promises and async/await in JavaScript by importing and calling
 * functions from the `async-await` directory.
 * It covers a wide range of topics including creating and handling Promises, using async/await for asynchronous operations,
 * handling multiple Promises concurrently and sequentially, and error handling in asynchronous code.
 * This comprehensive overview helps in understanding how to effectively use Promises and async/await,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
