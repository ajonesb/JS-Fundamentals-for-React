/**
 * DOM Manipulation: Changing Style
 * 
 * Demonstrates how to change the style of an element.
 */

export function changeStyle(element, property, value) {
    element.style[property] = value;
  }
  
  // Instantiate and call
  changeStyle(element, 'color', 'red');
  
  /**
   * Summary:
   * 
   * The style property allows you to set or get any style property of an element.
   */
  