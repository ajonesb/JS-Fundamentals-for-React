/**
 * Event Listeners: Removing Event Listeners
 * 
 * Adding and removing event listeners.
 */

export function addAndRemoveClickListener(elementId) {
    const element = document.getElementById(elementId);
  
    const handleClick = () => {
      console.log("Hello, world!");
    };
  
    element.addEventListener("click", handleClick);
    element.removeEventListener("click", handleClick);
  }
  
  // Usage example:
  // addAndRemoveClickListener("myElement");
  
  /**
   * Summary:
   * 
   * Removing event listeners is important for avoiding memory leaks and unintended behavior.
   * This example shows how to add and remove a click event listener.
   */
  