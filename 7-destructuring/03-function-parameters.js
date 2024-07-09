/**
 * Destructuring: Function Parameters
 * 
 * Using destructuring directly in function parameters for cleaner code.
 */

export function printUser({ name, age }) {
    return `${name} is ${age} years old.`;
  }
  
  // Instantiate and call
  console.log(printUser({ name: "John", age: 30 }));
  
  /**
   * Summary:
   * 
   * Destructuring in function parameters simplifies code and improves readability.
   */
  