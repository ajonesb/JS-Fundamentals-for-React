/**
 * Async/Await: Basic Usage
 * 
 * Demonstrates how to use async/await to handle Promises.
 */

import { fetchData } from './01-promises.js';

export async function loadData() {
  try {
    console.log("Fetching data...");
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Instantiate and call
loadData();

/**
 * Summary:
 * 
 * Async/await simplifies handling Promises, making asynchronous code more readable and maintainable.
 */
