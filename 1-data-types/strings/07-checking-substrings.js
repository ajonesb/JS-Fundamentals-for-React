/**
 * Strings: Checking for Substrings
 * 
 * Demonstrates how to check if a string contains a substring.
 */

export function includesSubstring(str, searchValue) {
    return str.includes(searchValue);
  }
  
  // Instantiate and call
  console.log("Includes 'Hello':", includesSubstring("Hello, World!", "Hello"));
  
  /**
   * Summary:
   * 
   * The includes method checks if a string contains a specified substring.
   */
  