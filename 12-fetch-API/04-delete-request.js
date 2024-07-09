/**
 * Fetch API: DELETE Request
 * 
 * Demonstrates making a DELETE request using the Fetch API.
 */

export async function deleteData(url) {
    try {
      await fetch(url, { method: "DELETE" });
      console.log("Post deleted");
    } catch (error) {
      console.log("Error:", error);
      throw error;
    }
  }
  
  // Instantiate and call
  deleteData("https://jsonplaceholder.typicode.com/posts/1");
  
  /**
   * Summary:
   * 
   * The Fetch API is used to make DELETE requests to remove data from an API.
   */
  