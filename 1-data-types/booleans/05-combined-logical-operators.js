/**
 * Booleans: Combined Logical Operators
 * 
 * Combining logical operators for complex conditions.
 */

export function welcomeAdmin(isUserLoggedIn, isUserAdmin) {
    if (isUserLoggedIn && isUserAdmin) {
      return "Welcome, admin!";
    }
    return "Access denied.";
  }
  
  // Instantiate and call
  console.log(welcomeAdmin(true, true));
  
  /**
   * Summary:
   * 
   * Combining logical operators allows for more complex conditional logic.
   */
  