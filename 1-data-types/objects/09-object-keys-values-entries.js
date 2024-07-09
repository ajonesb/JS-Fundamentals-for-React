/**
 * Objects: Object.keys, Object.values, Object.entries
 * 
 * Demonstrates how to use Object.keys, Object.values, and Object.entries.
 */

export function objectKeysValuesEntries(obj) {
    return {
      keys: Object.keys(obj),
      values: Object.values(obj),
      entries: Object.entries(obj),
    };
  }
  
  // Instantiate and call
  console.log(objectKeysValuesEntries(person));
  
  /**
   * Summary:
   * 
   * Object.keys, Object.values, and Object.entries are useful for extracting an object's properties, values, and key-value pairs.
   */
  