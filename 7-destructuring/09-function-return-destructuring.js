/**
 * Destructuring: Function Return Destructuring
 * 
 * Destructuring the return value of a function.
 */

export function getUser() {
    return { name: "Alice", age: 30 };
  }
  
  export function extractUser() {
    const { name, age } = getUser();
    return `${name} is ${age} years old.`;
  }
  
  // Instantiate and call
  console.log(extractUser());
  
  /**
   * Summary:
   * 
   * Destructuring the return value of functions simplifies variable assignments.
   */
  