/**
 * DOM Manipulation: Creating an Element
 * 
 * Demonstrates how to create a new element.
 */

export function createElement(tagName) {
    return document.createElement(tagName);
  }
  
  // Instantiate and call
  const newElement = createElement('div');
  console.log(newElement);
  
  /**
   * Summary:
   * 
   * The createElement method creates an Element node with the specified tag name.
   */
  