/**
 * Switch Statement: User Types
 * 
 * This example demonstrates how to use a switch statement to handle different types of users.
 */

export function getUserTypeMessage(userType) {
    switch (userType) {
      case "premium":
        return "You have access to all features";
      case "standard":
        return "You have limited access";
      default:
        return "Unknown user type";
    }
  }
  
  // Instantiate and call
  console.log(getUserTypeMessage("premium"));
  console.log(getUserTypeMessage("standard"));
  console.log(getUserTypeMessage("guest"));
  
  /**
   * Summary:
   * 
   * Switch statements provide a more concise and readable alternative to a series of if-else statements.
   * This example shows how to handle different user types with a switch statement.
   */
  