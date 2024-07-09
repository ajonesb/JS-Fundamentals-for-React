/**
 * Loop: Looping Over an Object
 * 
 * This example demonstrates how to loop over the properties of an object using a for-in loop.
 */

export function loopOverObject() {
    const person = {
      name: "Alice",
      age: 30,
      city: "New York"
    };
  
    for (const key in person) {
      console.log(`${key}: ${person[key]}`);
    }
  }
  
  // Instantiate and call
  loopOverObject();
  
  /**
   * Summary:
   * 
   * Looping over objects is essential for processing key-value pairs in JavaScript.
   */
  