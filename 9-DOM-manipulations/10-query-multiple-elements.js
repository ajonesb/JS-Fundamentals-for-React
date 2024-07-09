/**
 * DOM Manipulation: Querying Multiple Elements
 * 
 * Demonstrates how to select multiple elements using querySelectorAll.
 */

export function selectMultipleElements(selector) {
    return document.querySelectorAll(selector);
  }
  
  // Instantiate and call
  const elements = selectMultipleElements('.my-elements');
  console.log(elements);
  
  /**
   * Summary:
   * 
   * The querySelectorAll method returns all elements that match a specified CSS selector.
   */
  