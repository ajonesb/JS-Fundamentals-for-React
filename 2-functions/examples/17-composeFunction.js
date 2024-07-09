/**
 * Function: composeFunctions
 * 
 * This function takes multiple functions and composes them into a single function.
 * It demonstrates function composition for creating complex operations from simpler ones.
 */

export function composeFunctions(...funcs) {
    return function(value) {
      return funcs.reduceRight((acc, func) => func(acc), value);
    };
  }
  
  // Instantiate and call
  const addOne = (x) => x + 1;
  const multiplyByTwo = (x) => x * 2;
  
  const addOneAndMultiplyByTwo = composeFunctions(multiplyByTwo, addOne);
  console.log(`Result: ${addOneAndMultiplyByTwo(5)}`);
  
  /**
   * Summary:
   * 
   * The composeFunctions demonstrates how to use function composition to build complex operations.
   * Function composition is a key concept in functional programming, enabling the creation of complex behavior from simple functions.
   */
  