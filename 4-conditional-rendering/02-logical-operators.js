/**
 * Conditional Rendering: Logical Operators
 * 
 * Logical operators like && and || are used for more complex conditions.
 */

export function checkUserRole(isLoggedIn, isAdmin) {
    if (isLoggedIn && isAdmin) {
      return "User is logged in as an admin.";
    } else if (isLoggedIn) {
      return "User is logged in as a regular user.";
    } else {
      return "User is not logged in.";
    }
  }
  
  // Instantiate and call
  console.log(checkUserRole(true, true));
  console.log(checkUserRole(true, false));
  console.log(checkUserRole(false, false));
  
  /**
   * Summary:
   * 
   * Logical operators enable more complex conditional rendering, making it easier to handle multiple conditions.
   */
  