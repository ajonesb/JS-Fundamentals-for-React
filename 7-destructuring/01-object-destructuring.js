/**
 * Destructuring: Object Destructuring
 * 
 * Extracting multiple properties from an object in a single statement.
 */

export function extractPersonDetails(person) {
    const { name, age } = person;
    return `${name} is ${age} years old.`;
  }
  
  // Instantiate and call
  const person = { name: "John", age: 30, location: "New York" };
  console.log(extractPersonDetails(person));
  
  /**
   * Summary:
   * 
   * Object destructuring simplifies the extraction of multiple properties from objects.
   */
  