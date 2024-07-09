/**
 * Strings: Replacing Substrings
 * 
 * Demonstrates how to replace substrings within a string.
 */

export function replaceSubstring(str, searchValue, newValue) {
    return str.replace(searchValue, newValue);
  }
  
  // Instantiate and call
  console.log("Replaced:", replaceSubstring("Hello, World!", "World", "Alice"));
  
  /**
   * Summary:
   * 
   * The replace method replaces occurrences of a substring within a string.
   */
  