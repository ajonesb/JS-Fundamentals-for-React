/**
 * Event Listeners: Custom Events
 * 
 * Creating and dispatching custom events.
 */

export function triggerCustomEvent(eventName) {
    const customEvent = new Event(eventName);
    document.addEventListener(eventName, () => {
      console.log(`${eventName} triggered!`);
    });
    document.dispatchEvent(customEvent);
  }
  
  // Usage example:
  // triggerCustomEvent("customEvent");
  
  /**
   * Summary:
   * 
   * Custom events allow for more complex event-driven programming.
   * This example shows how to create and dispatch custom events.
   */
  