/**
 * Function: outerFunction
 * 
 * This function returns another function that greets a user.
 * It demonstrates the concept of closures.
 */

export function outerFunction() {
    const message = "Hello, ";
    return function(name) {
      return message + name;
    };
  }
  
  // Instantiate and call
  const greeting = outerFunction();
  console.log(greeting("Alice"));
  
  /**
   * Summary:
   * 
   * The outerFunction demonstrates how closures work in JavaScript.
   * Closures are a fundamental concept for managing state and creating function factories.
   */
  