/**
 * Async/Await: Handling Multiple Promises in Parallel
 * 
 * Demonstrates how to handle multiple Promises in parallel using async/await.
 */

import { fetchData } from './01-promises.js';

export async function loadMultipleData() {
  try {
    console.log("Fetching multiple data...");
    const [data1, data2] = await Promise.all([fetchData(), fetchData()]);
    console.log("Data1:", data1);
    console.log("Data2:", data2);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Instantiate and call
loadMultipleData();

/**
 * Summary:
 * 
 * Async/await with Promise.all allows handling multiple asynchronous operations in parallel.
 */
