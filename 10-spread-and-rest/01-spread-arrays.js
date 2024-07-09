/**
 * Spread Operator: Arrays
 * 
 * Demonstrates the use of the spread operator with arrays.
 */

export function spreadWithArrays(numbers, additionalNumbers) {
    return [...numbers, ...additionalNumbers];
  }
  
  // Instantiate and call
  console.log(spreadWithArrays([1, 2, 3], [4, 5]));
  
  /**
   * Summary:
   * 
   * The spread operator allows you to copy or combine arrays without mutating the original.
   */
  