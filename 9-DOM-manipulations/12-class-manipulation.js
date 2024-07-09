/**
 * DOM Manipulation: Class Manipulation
 * 
 * Demonstrates how to add, remove, and toggle classes on an element.
 */

export function addClass(element, className) {
    element.classList.add(className);
  }
  
  export function removeClass(element, className) {
    element.classList.remove(className);
  }
  
  export function toggleClass(element, className) {
    element.classList.toggle(className);
  }
  
  export function hasClass(element, className) {
    return element.classList.contains(className);
  }
  
  // Instantiate and call
  addClass(element, 'my-class');
  removeClass(element, 'my-class');
  toggleClass(element, 'my-class');
  console.log(hasClass(element, 'my-class'));
  
  /**
   * Summary:
   * 
   * The classList property allows you to add, remove, and toggle classes on an element.
   */
  