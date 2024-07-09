/**
 * Loop: Break and Continue
 * 
 * This example demonstrates how to control loop execution using break and continue statements.
 */

export function breakAndContinue() {
    for (let i = 1; i <= 5; i++) {
      if (i === 3) {
        continue;
      }
      if (i === 5) {
        break;
      }
      console.log(i);
    }
  }
  
  // Instantiate and call
  breakAndContinue();
  
  /**
   * Summary:
   * 
   * Break and continue statements provide control over loop execution, allowing you to skip or exit iterations.
   */
  