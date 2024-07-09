/**
 * Rest Operator: Objects
 * 
 * Demonstrates the use of the rest operator with objects.
 */

export function restWithObjects(person) {
    const { name, ...rest } = person;
    return { name, rest };
  }
  
  // Instantiate and call
  console.log(restWithObjects({ name: "John", age: 30, email: "john@example.com" }));
  
  /**
   * Summary:
   * 
   * The rest operator can be used to collect the remaining properties into an object during destructuring.
   */
  