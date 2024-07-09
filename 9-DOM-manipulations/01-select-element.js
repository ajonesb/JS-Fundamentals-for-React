/**
 * DOM Manipulation: Selecting an Element
 * 
 * Demonstrates how to select an element using querySelector.
 */

export function selectElement(selector) {
    return document.querySelector(selector);
  }
  
  // Instantiate and call
  const element = selectElement('.my-element');
  console.log(element);
  
  /**
   * Summary:
   * 
   * The querySelector method allows you to select the first element that matches a specified CSS selector.
   */
  