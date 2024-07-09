/**
 * Conditional Rendering: Multiple Conditions
 * 
 * Handling multiple conditions using logical operators for more complex scenarios.
 */

export function checkAdminVerification(role, isVerified) {
    if (role === "admin" && isVerified) {
      return "Admin is verified.";
    } else if (role === "admin") {
      return "Admin is not verified.";
    } else {
      return "User is not an admin.";
    }
  }
  
  // Instantiate and call
  console.log(checkAdminVerification("admin", true));
  console.log(checkAdminVerification("admin", false));
  console.log(checkAdminVerification("user", true));
  
  /**
   * Summary:
   * 
   * Handling multiple conditions allows for more granular control over the content displayed based on various states.
   */
  