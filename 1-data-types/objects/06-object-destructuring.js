/**
 * Objects: Object Destructuring
 * 
 * Demonstrates how to destructure objects.
 */

export function objectDestructuring(person) {
    const { name, age } = person;
    return { name, age };
  }
  
  // Instantiate and call
  const person = { name: "Alice", age: 30 };
  console.log(objectDestructuring(person));
  
  /**
   * Summary:
   * 
   * Object destructuring simplifies extracting multiple properties from an object.
   */
  