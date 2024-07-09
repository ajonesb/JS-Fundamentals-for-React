/**
 * Objects: Object Methods
 * 
 * Demonstrates defining and using methods in objects.
 */

export function personWithMethods() {
    const person = {
      name: "Alice",
      age: 30,
      greet() {
        return `Hello, my name is ${this.name}`;
      },
    };
    return person.greet();
  }
  
  // Instantiate and call
  console.log(personWithMethods());
  
  /**
   * Summary:
   * 
   * Methods in objects allow for encapsulating behavior related to the object.
   */
  