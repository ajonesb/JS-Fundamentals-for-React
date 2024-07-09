/**
 * Function: fetchDataAsync
 * 
 * This function simulates fetching data asynchronously and returns a promise.
 * It demonstrates asynchronous programming with async/await.
 */

export async function fetchDataAsync(url) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { name: "Bob", age: 25 };
        resolve(data);
      }, 2000);
    });
  }
  
  // Instantiate and call
  async function fetchDataWrapper(url) {
    const data = await fetchDataAsync(url);
    console.log("Fetched data:", data);
  }
  
  fetchDataWrapper("https://example.com/api");
  
  /**
   * Summary:
   * 
   * The fetchDataAsync function introduces asynchronous programming with promises and async/await.
   * This approach simplifies asynchronous code and is widely used in modern JavaScript and React applications.
   */
  