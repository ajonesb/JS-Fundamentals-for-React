/**
 * Null and Undefined: Checking for Null
 * 
 * Demonstrates how to check if a variable is null.
 */

export function checkNull(variable) {
    if (variable === null) {
      return "Variable is null";
    }
    return "Variable is not null";
  }
  
  // Instantiate and call
  console.log(checkNull(null));
  
  /**
   * Summary:
   * 
   * Checking for null is useful to handle cases where a variable has been explicitly set to have no value.
   */
  