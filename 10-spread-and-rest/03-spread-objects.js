/**
 * Spread Operator: Objects
 * 
 * Demonstrates the use of the spread operator with objects.
 */

export function spreadWithObjects(person, additionalProps) {
    return { ...person, ...additionalProps };
  }
  
  // Instantiate and call
  console.log(spreadWithObjects({ name: "John", age: 30 }, { email: "john@example.com" }));
  
  /**
   * Summary:
   * 
   * The spread operator allows you to copy or combine objects without mutating the original.
   */
  