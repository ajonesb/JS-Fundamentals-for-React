/**
 * DOM Manipulation: Cloning an Element
 * 
 * Demonstrates how to clone an existing element.
 */

export function cloneElement(element, deep = true) {
    return element.cloneNode(deep);
  }
  
  // Instantiate and call
  const clonedElement = cloneElement(element);
  console.log(clonedElement);
  
  /**
   * Summary:
   * 
   * The cloneNode method clones an element. The deep parameter indicates whether to clone the element's children as well.
   */
  