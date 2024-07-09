/**
 * Switch Statement: User Roles
 * 
 * This example demonstrates how to use a switch statement to handle different user roles.
 */

export function getUserRoleMessage(role) {
    switch (role) {
      case "admin":
        return "You have full access";
      case "editor":
        return "You can edit content";
      case "subscriber":
        return "You can view content";
      default:
        return "No access";
    }
  }
  
  // Instantiate and call
  console.log(getUserRoleMessage("admin"));
  console.log(getUserRoleMessage("editor"));
  console.log(getUserRoleMessage("subscriber"));
  console.log(getUserRoleMessage("guest"));
  
  /**
   * Summary:
   * 
   * Switch statements are useful for handling multiple cases based on a single variable's value.
   * This example shows how to handle different user roles with a switch statement.
   */
  