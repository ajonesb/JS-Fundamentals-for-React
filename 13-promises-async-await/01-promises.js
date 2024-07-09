/**
 * Promises: Basic Usage
 * 
 * Demonstrates how to create and handle a Promise.
 */

export function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data retrieved");
      }, 2000);
    });
  }
  
  export function handlePromise() {
    fetchData()
      .then(data => console.log(data))
      .catch(error => console.log("Error:", error));
  }
  
  // Instantiate and call
  handlePromise();
  
  /**
   * Summary:
   * 
   * Promises are used to handle asynchronous operations. The .then() method handles resolved Promises, and .catch() handles rejected Promises.
   */
  