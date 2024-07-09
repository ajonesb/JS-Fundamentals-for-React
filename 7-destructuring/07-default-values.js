/**
 * Destructuring: Default Values
 * 
 * Providing default values when destructuring.
 */

export function extractSettings(settings) {
    const { theme, fontSize, fontFamily = "Arial" } = settings;
    return { theme, fontSize, fontFamily };
  }
  
  // Instantiate and call
  const settings = { theme: "dark", fontSize: 14 };
  console.log(extractSettings(settings));
  
  /**
   * Summary:
   * 
   * Default values in destructuring ensure that variables have sensible defaults.
   */
  