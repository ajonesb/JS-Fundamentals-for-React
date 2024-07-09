/**
 * DOM Manipulation: Adding an Event Listener
 * 
 * Demonstrates how to add an event listener to an element.
 */

export function addClickListener(element, callback) {
    element.addEventListener('click', callback);
  }
  
  // Instantiate and call
  addClickListener(element, () => {
    console.log('Element clicked');
  });
  
  /**
   * Summary:
   * 
   * The addEventListener method attaches an event handler to the specified element.
   */
  