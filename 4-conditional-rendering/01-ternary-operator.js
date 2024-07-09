/**
 * Conditional Rendering: Ternary Operator
 * 
 * The ternary operator is used for inline conditional statements, providing a concise syntax for simple conditions.
 */

export function checkLoginStatus(isLoggedIn) {
    return isLoggedIn ? "User is logged in." : "User is not logged in.";
  }
  
  // Instantiate and call
  console.log(checkLoginStatus(true));
  
  /**
   * Summary:
   * 
   * The ternary operator allows for concise and readable inline conditional statements.
   */
  