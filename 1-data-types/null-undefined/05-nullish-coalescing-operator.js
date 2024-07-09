/**
 * Null and Undefined: Nullish Coalescing Operator
 * 
 * Demonstrates the use of the nullish coalescing operator (??) to provide default values.
 */

export function nullishCoalescing(variable, defaultValue) {
    return variable ?? defaultValue;
  }
  
  // Instantiate and call
  console.log("Username:", nullishCoalescing(null, "Guest"));
  
  /**
   * Summary:
   * 
   * The nullish coalescing operator (??) is used to provide default values when dealing with null or undefined data.
   */
  