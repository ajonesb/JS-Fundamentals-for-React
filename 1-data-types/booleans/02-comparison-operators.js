/**
 * Booleans: Comparison Operators
 * 
 * Using comparison operators to compare values.
 */

export function comparisonOperators(number1, number2) {
    return {
      equal: number1 == number2,
      notEqual: number1 != number2,
      strictEqual: number1 === number2,
      strictNotEqual: number1 !== number2,
      greaterThan: number1 > number2,
      lessThan: number1 < number2,
      greaterThanOrEqual: number1 >= number2,
      lessThanOrEqual: number1 <= number2,
    };
  }
  
  // Instantiate and call
  console.log(comparisonOperators(10, 5));
  
  /**
   * Summary:
   * 
   * Comparison operators are used to compare values and produce boolean results.
   */
  