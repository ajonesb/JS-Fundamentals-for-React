/**
 * Arrays: Array of Objects
 * 
 * Creating and manipulating an array of objects.
 */

export function arrayOfObjects() {
    const users = [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "Charlie", age: 35 },
    ];
    users.push({ name: "David", age: 40 });
    users.pop();
    return users;
  }
  
  // Instantiate and call
  console.log(arrayOfObjects());
  
  /**
   * Summary:
   * 
   * Arrays of objects are common in JavaScript for storing complex data structures.
   */
  