/**
 * Rest Operator: Function Parameters
 * 
 * Demonstrates the use of the rest operator in function parameters.
 */

export function sum(...nums) {
    return nums.reduce((acc, current) => acc + current, 0);
  }
  
  // Instantiate and call
  console.log("Sum:", sum(1, 2, 3, 4, 5));
  
  /**
   * Summary:
   * 
   * The rest operator allows you to handle function parameters dynamically.
   */
  