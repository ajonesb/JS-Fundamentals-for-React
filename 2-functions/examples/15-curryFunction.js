/**
 * Function: curryFunction
 * 
 * This function takes another function and returns a curried version of it.
 * It demonstrates currying for creating flexible and reusable functions.
 */

export function curryFunction(func) {
    return function curried(...args) {
      if (args.length >= func.length) {
        return func(...args);
      } else {
        return function(...moreArgs) {
          return curried(...args, ...moreArgs);
        };
      }
    };
  }
  
  export function multiply(a, b, c) {
    return a * b * c;
  }
  
  // Instantiate and call
  const curriedMultiply = curryFunction(multiply);
  console.log(`Curried multiplication: ${curriedMultiply(2)(3)(4)}`);
  
  /**
   * Summary:
   * 
   * The curryFunction demonstrates how to use currying to create functions with partial application.
   * Currying is a powerful technique in functional programming for creating reusable and composable functions.
   */
  