/**
 * Strings: Basic Operations
 * 
 * Demonstrates basic string operations.
 */

export function basicStringOperations(greeting, name) {
    return {
      concatenation: greeting + " My name is " + name + ".",
      templateLiteral: `${greeting} My name is ${name}.`,
      lowercase: greeting.toLowerCase(),
      substring: greeting.substring(0, 5),
    };
  }
  
  // Instantiate and call
  console.log(basicStringOperations("Hello, World!", "Alice"));
  
  /**
   * Summary:
   * 
   * Basic string operations include creation, concatenation, and manipulation using methods like toLowerCase and substring.
   */
  