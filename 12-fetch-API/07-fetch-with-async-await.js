/**
 * Fetch API: Fetch with Async/Await
 * 
 * Demonstrates using async/await for fetching data with the Fetch API.
 */

export async function fetchDataAsync(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error:", error);
      throw error;
    }
  }
  
  // Instantiate and call
  fetchDataAsync("https://jsonplaceholder.typicode.com/posts/1");
  
  /**
   * Summary:
   * 
   * Using async/await with the Fetch API allows for cleaner and more readable asynchronous code.
   */
  