/**
 * Conditional Rendering: Conditional Logic
 * 
 * Using functions to encapsulate conditional logic for better reuse and readability.
 */

export function getUserStatus(isLoggedIn, isAdmin) {
    if (isLoggedIn) {
      return isAdmin ? "User is logged in as an admin." : "User is logged in as a regular user.";
    } else {
      return "User is not logged in.";
    }
  }
  
  // Instantiate and call
  console.log(getUserStatus(true, true));
  console.log(getUserStatus(true, false));
  console.log(getUserStatus(false, false));
  
  /**
   * Summary:
   * 
   * Encapsulating conditional logic in functions promotes reuse and makes the code more modular and readable.
   */
  