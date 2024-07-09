/**
 * Null and Undefined: Checking for Undefined
 * 
 * Demonstrates how to check if a variable is undefined.
 */

export function checkUndefined(variable) {
    if (variable === undefined) {
      return "Variable is undefined";
    }
    return "Variable is defined";
  }
  
  // Instantiate and call
  console.log(checkUndefined(undefined));
  
  /**
   * Summary:
   * 
   * Checking for undefined is common in JavaScript to handle variables that have not been assigned a value.
   */
  