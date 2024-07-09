/**
 * Template Literals: Balance Message
 * 
 * Creating a dynamic message based on account balance using tagged template literals.
 */

export function balanceMessage(strings, userName, accountBalance) {
    const status = accountBalance < 0 ? "overdrawn" : "positive";
    return `${strings[0]}${userName}${strings[1]}$${Math.abs(accountBalance)}${strings[2]}${status}${strings[3]}`;
  }
  
  // Instantiate and call
  console.log(balanceMessage`User ${"Charlie"} has a balance of ${-50.75}, which is ${''}.`);
  
  /**
   * Summary:
   * 
   * Tagged template literals enable dynamic content creation based on complex conditions.
   */
  