/**
 * Destructuring: Array Rest Operator
 * 
 * Using the rest operator to capture remaining elements in an array.
 */

export function extractColors(colors) {
    const [primary, secondary, ...others] = colors;
    return { primary, secondary, others };
  }
  
  // Instantiate and call
  const colors = ["red", "green", "blue", "yellow"];
  console.log(extractColors(colors));
  
  /**
   * Summary:
   * 
   * The rest operator allows for capturing the remaining elements in an array.
   */
  