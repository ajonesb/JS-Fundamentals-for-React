/**
 * Loop: Do-While Loop
 * 
 * This example demonstrates how to use a do-while loop to execute a block of code at least once.
 */

export function doWhileLoop() {
    let num = 0;
    do {
      console.log(num);
      num++;
    } while (num < 5);
  }
  
  // Instantiate and call
  doWhileLoop();
  
  /**
   * Summary:
   * 
   * The do-while loop ensures that the code block is executed at least once, even if the condition is false initially.
   */
  