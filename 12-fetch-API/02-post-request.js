/**
 * Fetch API: POST Request
 * 
 * Demonstrates making a POST request using the Fetch API.
 */

export async function postData(url, payload) {
    try {
      const response = await fetch(url, {
        method: "POST",
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
  postData("https://jsonplaceholder.typicode.com/posts", {
    title: "foo",
    body: "bar",
    userId: 1,
  });
  
  /**
   * Summary:
   * 
   * The Fetch API is used to make POST requests to send data to an API.
   */
  