/**
 * Event Listeners: Event Propagation
 * 
 * Understanding event bubbling and capturing in event propagation.
 */

export function addPropagationListeners(parentId, childId) {
    const parent = document.getElementById(parentId);
    const child = document.getElementById(childId);
  
    parent.addEventListener("click", () => {
      console.log("Parent clicked!");
    });
  
    child.addEventListener("click", (event) => {
      event.stopPropagation();
      console.log("Child clicked!");
    });
  }
  
  // Usage example:
  // addPropagationListeners("parent", "child");
  
  /**
   * Summary:
   * 
   * Event propagation includes event bubbling and capturing.
   * This example shows how to manage event propagation with stopPropagation.
   */
  