/**
 * Function: fetchData
 * 
 * This function simulates fetching data from a URL and uses a callback to process the data.
 * It demonstrates asynchronous programming with callbacks.
 */

export function fetchData(url, callback) {
    setTimeout(() => {
      const data = { name: "Alice", age: 30 };
      callback(data);
    }, 2000);
  }
  
  // Instantiate and call
  fetchData("https://example.com/api", (data) => {
    console.log("Fetched data:", data);
  });
  
  /**
   * Summary:
   * 
   * The fetchData function introduces asynchronous programming using callbacks.
   * Asynchronous programming is essential for handling tasks like data fetching in JavaScript and React.
   */
  