/**
 * Fetch API: Fetch with Headers
 * 
 * Demonstrates fetching data with headers using the Fetch API.
 */

export async function fetchWithHeaders(url, headers) {
    try {
      const response = await fetch(url, { headers });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error:", error);
      throw error;
    }
  }
  
  // Instantiate and call
  fetchWithHeaders("https://jsonplaceholder.typicode.com/posts", {
    Authorization: "Bearer your_token_here",
  });
  
  /**
   * Summary:
   * 
   * The Fetch API allows you to set headers for your requests to pass additional information like authorization tokens.
   */
  