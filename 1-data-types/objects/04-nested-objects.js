/**
 * Objects: Nested Objects
 * 
 * Demonstrates working with nested objects.
 */

export function nestedObjectExample(user) {
    return user.address.city;
  }
  
  // Instantiate and call
  const user = { name: "Alice", address: { street: "123 Main St", city: "New York" } };
  console.log("User's city:", nestedObjectExample(user));
  
  /**
   * Summary:
   * 
   * Nested objects are common in JavaScript, and accessing their properties requires understanding the nested structure.
   */
  