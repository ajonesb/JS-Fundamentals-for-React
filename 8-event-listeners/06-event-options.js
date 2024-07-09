/**
 * Event Listeners: Event Options
 * 
 * Using options such as `once`, `passive`, and `capture` with event listeners.
 */

export function addButtonClickListenerWithOptions(buttonId) {
    const button = document.getElementById(buttonId);
  
    const handleClick = () => {
      console.log("Button clicked!");
    };
  
    button.addEventListener("click", handleClick, { once: true });
  }
  
  // Usage example:
  // addButtonClickListenerWithOptions("myButton");
  
  /**
   * Summary:
   * 
   * Event options like `once` make event handling more flexible and efficient.
   * This example shows how to use the `once` option with an event listener.
   */
  