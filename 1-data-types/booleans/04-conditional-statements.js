/**
 * Booleans: Conditional Statements
 * 
 * Using boolean values in conditional statements.
 */

export function welcomeUser(isUserLoggedIn) {
    if (isUserLoggedIn) {
      return "Welcome, user!";
    }
    return "Please log in.";
  }
  
  // Instantiate and call
  console.log(welcomeUser(true));
  
  /**
   * Summary:
   * 
   * Boolean values are essential for conditional logic and control flow in programming.
   */
  