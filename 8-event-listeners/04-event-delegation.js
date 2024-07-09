/**
 * Event Listeners: Event Delegation
 * 
 * Handling events through a parent element.
 */

export function addListClickListener(listId) {
    const list = document.getElementById(listId);
  
    list.addEventListener("click", (event) => {
      if (event.target.tagName === "LI") {
        console.log("List item clicked!");
      }
    });
  }
  
  // Usage example:
  // addListClickListener("myList");
  
  /**
   * Summary:
   * 
   * Event delegation allows for efficient event handling by utilizing a parent element.
   * This example shows how to use event delegation with a list.
   */
  