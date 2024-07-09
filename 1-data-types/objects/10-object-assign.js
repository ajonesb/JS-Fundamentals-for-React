/**
 * Objects: Object.assign
 * 
 * Demonstrates how to use Object.assign to merge objects.
 */

export function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  }
  
  // Instantiate and call
  console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
  
  /**
   * Summary:
   * 
   * Object.assign is used to merge multiple objects into one.
   */
  