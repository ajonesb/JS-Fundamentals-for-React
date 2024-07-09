/**
 * Event Listeners: Basic Event Listener
 * 
 * Adding a basic event listener to an HTML element.
 */

export function addButtonClickListener(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener("click", () => {
      console.log("Button clicked!");
    });
  }
  
  // Usage example:
  // addButtonClickListener("myButton");
  
  /**
   * Summary:
   * 
   * Basic event listeners are the foundation of event handling in JavaScript.
   * This example shows how to add a click event listener to a button.
   */
  