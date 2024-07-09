/**
 * Function: applyOperation
 * 
 * This function applies a given operation to two numbers.
 * It demonstrates the use of higher-order functions.
 */

export function applyOperation(a, b, operation) {
    return operation(a, b);
  }
  
  // Instantiate and call
  const addNumbers = (x, y) => x + y;
  const subtractNumbers = (x, y) => x - y;
  
  console.log(`Addition: ${applyOperation(5, 3, addNumbers)}`);
  console.log(`Subtraction: ${applyOperation(5, 3, subtractNumbers)}`);
  
  /**
   * Summary:
   * 
   * The applyOperation function illustrates how to use higher-order functions to create flexible and reusable code.
   */
  