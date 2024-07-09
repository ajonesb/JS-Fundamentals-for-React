/**
 * Function: partialFunction
 * 
 * This function takes another function and some arguments, and returns a partially applied version of it.
 * It demonstrates partial application for creating flexible and reusable functions.
 */

export function partialFunction(func, ...partialArgs) {
    return function(...args) {
      return func(...partialArgs, ...args);
    };
  }
  
  export function power(base, exponent) {
    return base ** exponent;
  }
  
  // Instantiate and call
  const squareNumber = partialFunction(power, 2);
  console.log(`Square of 5: ${squareNumber(5)}`);
  
  const cubeNumber = partialFunction(power, 3);
  console.log(`Cube of 5: ${cubeNumber(5)}`);
  
  /**
   * Summary:
   * 
   * The partialFunction demonstrates how to use partial application to create functions with fixed arguments.
   * Partial application is useful for creating specialized functions from more general ones.
   */
  