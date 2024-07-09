/**
 * Spread Operator: Nested Objects
 * 
 * Demonstrates the use of the spread operator with nested objects.
 */

export function mergeNestedObjects(person) {
    return {
      ...person,
      address: {
        ...person.address,
        city: "San Francisco",
      },
    };
  }
  
  // Instantiate and call
  const person = { name: "John", age: 30, address: { city: "New York", country: "USA" } };
  console.log(mergeNestedObjects(person));
  
  /**
   * Summary:
   * 
   * The spread operator can be used to merge nested objects.
   */
  