/**
 * Template Literals: Tagged Template Literals
 * 
 * Tagged template literals allow for more complex scenarios by enabling functions to process the template literals.
 */

export function userRoleTemplate(strings, user, role) {
    return `${strings[0]}${user}${strings[1]}${role}${strings[2]}`;
  }
  
  // Instantiate and call
  console.log(userRoleTemplate`User ${"Bob"} is a ${"user"} of the system.`);
  
  /**
   * Summary:
   * 
   * Tagged template literals offer advanced customization by allowing functions to process template literals before outputting the final string.
   */
  