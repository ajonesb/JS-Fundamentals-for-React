/**
 * Loop: Looping Over a Set
 * 
 * This example demonstrates how to loop over the elements of a Set using a for-of loop.
 */

export function loopOverSet() {
    const mySet = new Set([1, 2, 3]);
    for (const item of mySet) {
      console.log(item);
    }
  }
  
  // Instantiate and call
  loopOverSet();
  
  /**
   * Summary:
   * 
   * Looping over Sets allows you to process unique elements in a collection.
   */
  