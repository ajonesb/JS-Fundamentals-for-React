/**
 * Function: fetchDataWithPromise
 * 
 * This function simulates fetching data and returns a promise.
 * It demonstrates error handling with promises.
 */

export function fetchDataWithPromise(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const error = false;
        if (!error) {
          const data = { name: "Bob", age: 25 };
          resolve(data);
        } else {
          reject("Error fetching data");
        }
      }, 2000);
    });
  }
  
  // Instantiate and call
  fetchDataWithPromise("https://example.com/api")
    .then((data) => console.log("Fetched data:", data))
    .catch((error) => console.error("Error:", error));
  
  /**
   * Summary:
   * 
   * The fetchDataWithPromise function shows how to handle errors in asynchronous code using promises.
   * Error handling is crucial for building robust applications.
   */
  