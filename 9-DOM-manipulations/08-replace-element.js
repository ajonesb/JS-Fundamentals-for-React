/**
 * DOM Manipulation: Replacing an Element
 * 
 * Demonstrates how to replace an existing element with a new element.
 */

export function replaceElement(oldElement, newElement) {
    oldElement.replaceWith(newElement);
  }
  
  // Instantiate and call
  const anotherNewElement = createElement('span');
  replaceElement(newElement, anotherNewElement);
  
  /**
   * Summary:
   * 
   * The replaceWith method replaces the current node with a new node.
   */
  