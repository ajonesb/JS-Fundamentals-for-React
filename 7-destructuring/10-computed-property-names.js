/**
 * Destructuring: Computed Property Names
 * 
 * Using computed property names in destructuring.
 */

export function extractLocation(person, key) {
    const { [key]: location } = person;
    return location;
  }
  
  // Instantiate and call
  const person = { name: "John", age: 30, location: "New York" };
  console.log(extractLocation(person, "location"));
  
  /**
   * Summary:
   * 
   * Computed property names in destructuring allow for dynamic property access.
   */
  