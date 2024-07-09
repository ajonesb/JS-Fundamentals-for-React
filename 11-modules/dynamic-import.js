/**
 * Dynamic Import
 * 
 * Demonstrates how to use dynamic imports to load modules conditionally.
 */

async function loadModule(condition) {
    if (condition) {
      const { add } = await import('./01-basic-exports.js');
      console.log("Dynamically imported addition:", add(3, 4));
    } else {
      const { subtract } = await import('./01-basic-exports.js');
      console.log("Dynamically imported subtraction:", subtract(9, 4));
    }
  }
  
  // Instantiate and call
  loadModule(true);
  loadModule(false);
  
  /**
   * Summary:
   * 
   * Dynamic imports allow you to load modules conditionally or asynchronously, which can improve performance.
   */
  