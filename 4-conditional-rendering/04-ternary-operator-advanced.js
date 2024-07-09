/**
 * Conditional Rendering: Advanced Ternary Operator
 * 
 * Combining multiple ternary operators for more advanced inline conditions.
 */

export function getAgeMessage(age) {
    return age >= 18 ? "You are an adult." : "You are a minor.";
  }
  
  // Instantiate and call
  console.log(getAgeMessage(18));
  console.log(getAgeMessage(17));
  
  /**
   * Summary:
   * 
   * Advanced use of the ternary operator allows for handling multiple conditions inline, maintaining readability.
   */
  