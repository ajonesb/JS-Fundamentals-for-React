/**
 * Function: factorial
 * 
 * This function computes the factorial of a number using recursion.
 * It demonstrates recursive functions.
 */

export function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  // Instantiate and call
  console.log(`Factorial of 5: ${factorial(5)}`);
  
  /**
   * Summary:
   * 
   * The factorial function shows how to implement recursion in JavaScript.
   * Understanding recursion is important for solving problems that involve repeated tasks.
   */
  