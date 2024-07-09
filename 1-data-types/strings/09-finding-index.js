/**
 * Strings: Finding Index of Substring
 * 
 * Demonstrates how to find the index of a substring within a string.
 */

export function indexOfSubstring(str, searchValue) {
    return str.indexOf(searchValue);
  }
  
  // Instantiate and call
  console.log("Index of 'World':", indexOfSubstring("Hello, World!", "World"));
  
  /**
   * Summary:
   * 
   * The indexOf method returns the index of the first occurrence of a substring within a string.
   */
  