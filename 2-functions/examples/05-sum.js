/**
 * Function: sum
 * 
 * This function takes a variable number of arguments and returns their sum.
 * It demonstrates the use of rest parameters.
 */

export function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  // Instantiate and call
  console.log(`Sum of numbers: ${sum(1, 2, 3, 4, 5)}`);
  
  /**
   * Summary:
   * 
   * The sum function shows how to use rest parameters to handle variable numbers of arguments.
   * This is useful for creating flexible and reusable functions.
   */
  