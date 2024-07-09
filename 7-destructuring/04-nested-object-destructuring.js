/**
 * Destructuring: Nested Object Destructuring
 * 
 * Extracting nested properties from an object.
 */

export function extractUserDetails(user) {
    const {
      name: userName,
      address: { city, state },
    } = user;
    return `${userName} lives in ${city}, ${state}.`;
  }
  
  // Instantiate and call
  const user = { name: "Alice", address: { city: "San Francisco", state: "CA" } };
  console.log(extractUserDetails(user));
  
  /**
   * Summary:
   * 
   * Nested destructuring allows for the extraction of deeply nested properties from objects.
   */
  