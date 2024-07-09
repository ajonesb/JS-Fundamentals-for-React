/**
 * Booleans: Logical Operators
 * 
 * Using logical operators to combine or negate boolean values.
 */

export function logicalOperators(isTrue, isFalse) {
    return {
      and: isTrue && isFalse,
      or: isTrue || isFalse,
      not: !isTrue,
    };
  }
  
  // Instantiate and call
  console.log(logicalOperators(true, false));
  
  /**
   * Summary:
   * 
   * Logical operators like && (AND), || (OR), and ! (NOT) are used to combine or negate boolean values.
   */
  