/**
 * Async/Await: Handling Promises Sequentially
 * 
 * Demonstrates how to handle multiple Promises sequentially using async/await.
 */

import { fetchData } from './01-promises.js';

export async function loadSequentialData() {
  try {
    console.log("Fetching sequential data...");
    const data1 = await fetchData();
    console.log("Data1:", data1);
    const data2 = await fetchData();
    console.log("Data2:", data2);
  } catch (error) {
    console.log("Error:", error);
  }
}

// Instantiate and call
loadSequentialData();

/**
 * Summary:
 * 
 * Async/await allows handling multiple asynchronous operations sequentially, waiting for each to complete before starting the next.
 */
