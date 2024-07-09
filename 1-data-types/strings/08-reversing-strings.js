/**
 * Strings: Reversing Strings
 * 
 * Demonstrates how to reverse a string.
 */

export function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  // Instantiate and call
  console.log("Reversed:", reverseString("Hello, World!"));
  
  /**
   * Summary:
   * 
   * Reversing a string involves splitting it into an array, reversing the array, and joining it back into a string.
   */
  