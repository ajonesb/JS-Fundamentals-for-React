/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various uses of the Fetch API in JavaScript.
 * It imports functions from the `fetch-api` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to use the Fetch API to make GET, POST, PUT, and DELETE requests, 
 * handle query parameters and headers, and use async/await for asynchronous operations.
 */

import { getData } from './01-get-request.js';
import { postData } from './02-post-request.js';
import { putData } from './03-put-request.js';
import { deleteData } from './04-delete-request.js';
import { fetchWithQueryParams } from './05-fetch-with-query-params.js';
import { fetchWithHeaders } from './06-fetch-with-headers.js';
import { fetchDataAsync } from './07-fetch-with-async-await.js';

// Call the functions for demonstration
getData("https://jsonplaceholder.typicode.com/posts/1");
postData("https://jsonplaceholder.typicode.com/posts", {
  title: "foo",
  body: "bar",
  userId: 1,
});
putData("https://jsonplaceholder.typicode.com/posts/1", {
  id: 1,
  title: "foo",
  body: "bar",
  userId: 1,
});
deleteData("https://jsonplaceholder.typicode.com/posts/1");
fetchWithQueryParams("https://jsonplaceholder.typicode.com/posts", { userId: 1 });
fetchWithHeaders("https://jsonplaceholder.typicode.com/posts", {
  Authorization: "Bearer your_token_here",
});
fetchDataAsync("https://jsonplaceholder.typicode.com/posts/1");

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of the Fetch API in JavaScript by importing and calling
 * functions from the `fetch-api` directory.
 * It covers a wide range of topics including making GET, POST, PUT, and DELETE requests, handling query parameters and headers,
 * and using async/await for asynchronous operations.
 * This comprehensive overview helps in understanding how to effectively use the Fetch API,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
