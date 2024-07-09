/**
 * Rest Operator: Destructuring
 * 
 * Demonstrates the use of the rest operator with destructuring.
 */

export function restWithDestructuring(array) {
    const [first, ...rest] = array;
    return { first, rest };
  }
  
  // Instantiate and call
  console.log(restWithDestructuring([1, 2, 3, 4, 5]));
  
  /**
   * Summary:
   * 
   * The rest operator can be used to collect the remaining elements into an array during destructuring.
   */
  