/**
 * Switch Statement: Event Types
 * 
 * This example demonstrates how to use a switch statement to handle different types of events.
 */

export function getEventTypeMessage(eventType) {
    switch (eventType) {
      case "conference":
        return "Conference event";
      case "workshop":
        return "Workshop event";
      default:
        return "Unknown event type";
    }
  }
  
  // Instantiate and call
  console.log(getEventTypeMessage("conference"));
  console.log(getEventTypeMessage("workshop"));
  console.log(getEventTypeMessage("webinar"));
  
  /**
   * Summary:
   * 
   * The break keyword is used to prevent "fall-through" to other cases, ensuring that only the relevant case is executed.
   * This example shows how to handle different types of events with a switch statement.
   */
  