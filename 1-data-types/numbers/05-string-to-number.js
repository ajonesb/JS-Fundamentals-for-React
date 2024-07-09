/**
 * Numbers: Converting Strings to Numbers
 * 
 * Demonstrates how to convert strings to numbers.
 */

export function convertStringToNumber(str) {
    return {
      parsedInt: parseInt(str),
      parsedFloat: parseFloat(str),
    };
  }
  
  // Instantiate and call
  console.log(convertStringToNumber("10.5"));
  
  /**
   * Summary:
   * 
   * The parseInt() and parseFloat() functions convert strings to numbers.
   */
  