/**
 * Strings: Splitting Strings
 * 
 * Demonstrates how to split a string into an array of substrings.
 */

export function splitString(str, delimiter) {
    return str.split(delimiter);
  }
  
  // Instantiate and call
  console.log("Words:", splitString("Hello, World!", " "));
  
  /**
   * Summary:
   * 
   * The split method splits a string into an array of substrings based on a delimiter.
   */
  