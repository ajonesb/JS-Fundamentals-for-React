/**
 * DOM Manipulation: Attribute Manipulation
 * 
 * Demonstrates how to get and set attributes on an element.
 */

export function getAttribute(element, attribute) {
    return element.getAttribute(attribute);
  }
  
  export function setAttribute(element, attribute, value) {
    element.setAttribute(attribute, value);
  }
  
  // Instantiate and call
  setAttribute(element, 'id', 'new-id');
  console.log(getAttribute(element, 'id'));
  
  /**
   * Summary:
   * 
   * The getAttribute and setAttribute methods are used to get and set attributes on an element.
   */
  