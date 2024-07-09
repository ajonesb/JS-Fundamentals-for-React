/**
 * Strings: Padding Strings
 * 
 * Demonstrates how to pad a string to a specified length.
 */

export function padString(str, targetLength, padString) {
    return str.padStart(targetLength, padString);
  }
  
  // Instantiate and call
  console.log("Padded:", padString("Hello", 10, "*"));
  
  /**
   * Summary:
   * 
   * The padStart method pads the beginning of a string to a specified length with a specified string.
   */
  