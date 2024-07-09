/**
 * Null and Undefined: Advanced Nullish Coalescing Operator
 * 
 * Demonstrates the use of the nullish coalescing operator (??) with object properties.
 */

export function advancedNullishCoalescing(user) {
    const name = user.name ?? "Anonymous";
    const age = user.age ?? 18;
    return { name, age };
  }
  
  // Instantiate and call
  console.log(advancedNullishCoalescing({ name: "John", age: 25 }));
  
  /**
   * Summary:
   * 
   * The nullish coalescing operator (??) can be used with object properties to provide default values.
   */
  