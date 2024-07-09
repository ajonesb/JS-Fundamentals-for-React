/**
 * Booleans: Practical Use Case
 * 
 * Applying boolean logic in a practical scenario.
 */

export function canAccessContent(isLoggedIn, isSubscriber) {
    if (isLoggedIn && isSubscriber) {
      return "Access to content granted.";
    }
    return "Access to content denied.";
  }
  
  // Instantiate and call
  console.log(canAccessContent(true, true));
  
  /**
   * Summary:
   * 
   * Practical use of boolean logic is common in real-world applications such as access control.
   */
  