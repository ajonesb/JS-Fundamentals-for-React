/**
 * Promises: Handling Multiple Promises
 * 
 * Demonstrates how to handle multiple Promises using Promise.all.
 */

export function fetchMultipleData() {
    const promise1 = fetchData();
    const promise2 = fetchData();
  
    return Promise.all([promise1, promise2]);
  }
  
  export function handleMultiplePromises() {
    fetchMultipleData()
      .then(data => console.log("All data:", data))
      .catch(error => console.log("Error:", error));
  }
  
  // Instantiate and call
  handleMultiplePromises();
  
  /**
   * Summary:
   * 
   * Promise.all allows handling multiple Promises concurrently and resolves when all Promises are fulfilled.
   */
  