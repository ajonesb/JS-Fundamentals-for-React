/**
 * Numbers: Fixed Decimal Places
 * 
 * Demonstrates how to format numbers to fixed decimal places.
 */

export function formatDecimal(number, decimalPlaces) {
    return number.toFixed(decimalPlaces);
  }
  
  // Instantiate and call
  console.log("Tax:", formatDecimal(99.99 * 0.1, 2));
  
  /**
   * Summary:
   * 
   * The toFixed() method formats a number to a specified number of decimal places.
   */
  