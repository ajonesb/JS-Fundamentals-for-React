/**
 * Destructuring: Variable Swapping
 * 
 * Swapping variables using destructuring.
 */

export function swapVariables(a, b) {
    [a, b] = [b, a];
    return { a, b };
  }
  
  // Instantiate and call
  let a = 1;
  let b = 2;
  console.log(swapVariables(a, b));
  
  /**
   * Summary:
   * 
   * Destructuring simplifies the process of swapping variables.
   */
  