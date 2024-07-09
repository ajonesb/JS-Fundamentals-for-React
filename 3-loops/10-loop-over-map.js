/**
 * Loop: Looping Over a Map
 * 
 * This example demonstrates how to loop over the key-value pairs of a Map using a for-of loop.
 */

export function loopOverMap() {
    const myMap = new Map([
      ["key1", "value1"],
      ["key2", "value2"]
    ]);
  
    for (const [key, value] of myMap) {
      console.log(`${key}: ${value}`);
    }
  }
  
  // Instantiate and call
  loopOverMap();
  
  /**
   * Summary:
   * 
   * Looping over Maps allows you to process key-value pairs efficiently.
   */
  