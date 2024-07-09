/**
 * Function: greetUser
 * 
 * This function greets a user with a default name if no name is provided.
 * It demonstrates the use of default parameters.
 */

export function greetUser(name = "Guest") {
    return `Hello, ${name}!`;
  }
  
  // Instantiate and call
  console.log(greetUser("Alice"));
  console.log(greetUser());
  
  /**
   * Summary:
   * 
   * The greetUser function highlights how to set default parameters for functions.
   * Default parameters enhance function usability and robustness.
   */
  