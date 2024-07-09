/**
 * Function: fetchDataAsyncWithErrors
 * 
 * This function simulates fetching data asynchronously and returns a promise, with error handling.
 * It demonstrates error handling with async/await.
 */

export async function fetchDataAsyncWithErrors(url) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const error = true;
        if (!error) {
          const data = { name: "Bob", age: 25 };
          resolve(data);
        } else {
          reject("Error fetching data");
        }
      }, 2000);
    });
  }
  
  export async function fetchDataWrapperWithErrors(url) {
    try {
      const data = await fetchDataAsyncWithErrors(url);
      console.log("Fetched data:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Instantiate and call
  fetchDataWrapperWithErrors("https://example.com/api");
  
  /**
   * Summary:
   * 
   * The fetchDataWrapperWithErrors function demonstrates how to handle errors in asynchronous code using async/await.
   * Proper error handling is essential for creating reliable and maintainable code.
   */
  