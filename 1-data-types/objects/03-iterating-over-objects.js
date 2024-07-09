/**
 * Objects: Iterating Over Objects
 * 
 * Demonstrates how to iterate over object properties.
 */

export function iterateObjectProperties(obj) {
    let result = '';
    for (let key in obj) {
      result += `${key}: ${obj[key]}\n`;
    }
    return result;
  }
  
  // Instantiate and call
  console.log(iterateObjectProperties(car));
  
  /**
   * Summary:
   * 
   * Iterating over object properties is useful for accessing and processing all key-value pairs in an object.
   */
  