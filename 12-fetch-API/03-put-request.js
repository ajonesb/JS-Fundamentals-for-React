/**
 * Fetch API: PUT Request
 * 
 * Demonstrates making a PUT request using the Fetch API.
 */

export async function putData(url, payload) {
    try {
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error:", error);
      throw error;
    }
  }
  
  // Instantiate and call
  putData("https://jsonplaceholder.typicode.com/posts/1", {
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  });
  
  /**
   * Summary:
   * 
   * The Fetch API is used to make PUT requests to update data in an API.
   */
  