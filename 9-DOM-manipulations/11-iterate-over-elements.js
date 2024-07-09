/**
 * DOM Manipulation: Iterating Over Elements
 * 
 * Demonstrates how to iterate over multiple elements.
 */

export function iterateOverElements(elements, callback) {
    elements.forEach(callback);
  }
  
  // Instantiate and call
  iterateOverElements(elements, (el) => {
    console.log(el);
  });
  
  /**
   * Summary:
   * 
   * The forEach method executes a provided function once for each array element.
   */
  