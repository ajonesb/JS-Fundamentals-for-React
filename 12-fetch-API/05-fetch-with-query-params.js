/**
 * Fetch API: Fetch with Query Parameters
 * 
 * Demonstrates fetching data with query parameters using the Fetch API.
 */

export async function fetchWithQueryParams(url, params) {
    try {
      const queryString = new URLSearchParams(params).toString();
      const response = await fetch(`${url}?${queryString}`);
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error:", error);
      throw error;
    }
  }
  
  // Instantiate and call
  fetchWithQueryParams("https://jsonplaceholder.typicode.com/posts", { userId: 1 });
  
  /**
   * Summary:
   * 
   * The Fetch API allows you to fetch data with query parameters by appending them to the URL.
   */
  