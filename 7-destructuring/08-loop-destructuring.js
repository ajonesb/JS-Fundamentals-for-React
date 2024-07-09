/**
 * Destructuring: Loop Destructuring
 * 
 * Using destructuring within a loop to extract properties from objects.
 */

export function extractUserAges(users) {
    return users.map(({ name, age }) => `${name} is ${age} years old.`);
  }
  
  // Instantiate and call
  const users = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ];
  console.log(extractUserAges(users));
  
  /**
   * Summary:
   * 
   * Destructuring within loops improves readability and simplifies code.
   */
  