/**
 * Function: createMultiplier
 * 
 * This function returns another function that multiplies its argument by a specified multiplier.
 * It demonstrates the concept of higher-order functions.
 */

export function createMultiplier(multiplier) {
    return function(number) {
      return number * multiplier;
    };
  }
  
  // Instantiate and call
  const double = createMultiplier(2);
  console.log(`Double of 5: ${double(5)}`);
  
  /**
   * Summary:
   * 
   * The createMultiplier function shows how to create higher-order functions.
   * Higher-order functions are a key concept in functional programming and React.
   */
  