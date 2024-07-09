/**
 * Fetch API: GET Request
 * 
 * Demonstrates making a GET request using the Fetch API.
 */

export async function getData(url) {
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
  getData("https://jsonplaceholder.typicode.com/posts/1");
  
  /**
   * Summary:
   * 
   * The Fetch API is used to make GET requests to retrieve data from an API.
   */
  