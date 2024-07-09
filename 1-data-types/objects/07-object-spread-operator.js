/**
 * Objects: Object Spread Operator
 * 
 * Demonstrates the use of the spread operator with objects.
 */

export function objectSpreadOperator(person, additionalProps) {
    return { ...person, ...additionalProps };
  }
  
  // Instantiate and call
  console.log(objectSpreadOperator(person, { city: "New York" }));
  
  /**
   * Summary:
   * 
   * The spread operator is useful for creating new objects by combining existing ones.
   */
  