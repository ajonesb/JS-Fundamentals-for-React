/**
 * Template Literals: Dynamic Strings
 * 
 * Template literals provide an easy way to create string expressions embedded with variables,
 * an improvement over the old concatenation approach.
 */

export function getUserRoleMessage(user, role) {
    return `User ${user} is an ${role} of the system.`;
  }
  
  // Instantiate and call
  console.log(getUserRoleMessage("Alice", "admin"));
  
  /**
   * Summary:
   * 
   * Template literals make it easy to create dynamic strings seamlessly integrated with variables.
   */
  