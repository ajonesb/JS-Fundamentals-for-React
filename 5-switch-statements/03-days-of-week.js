/**
 * Switch Statement: Days of the Week
 * 
 * This example demonstrates how to use a switch statement to handle different days of the week.
 */

export function getDayMessage(day) {
    switch (day) {
      case "Monday":
        return "Start of the week";
      case "Friday":
        return "End of the week";
      default:
        return "Midweek";
    }
  }
  
  // Instantiate and call
  console.log(getDayMessage("Monday"));
  console.log(getDayMessage("Wednesday"));
  console.log(getDayMessage("Friday"));
  
  /**
   * Summary:
   * 
   * Switch statements can be more efficient than if-else chains, especially when there are many cases to evaluate.
   * This example shows how to handle different days of the week with a switch statement.
   */
  