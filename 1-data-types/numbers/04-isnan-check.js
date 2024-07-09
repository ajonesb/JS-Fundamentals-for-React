/**
 * Numbers: Checking for NaN
 * 
 * Demonstrates how to check if a value is NaN (Not a Number).
 */

export function checkNaN(value) {
    return isNaN(value) ? "Not a number" : "Is a number";
  }
  
  // Instantiate and call
  console.log(checkNaN("Hello"));
  
  /**
   * Summary:
   * 
   * The isNaN() function checks if a value is NaN (Not a Number).
   */
  