/**
 * Arrays: Common Array Methods
 * 
 * Using common array methods like push, pop, shift, unshift, and slice.
 */

export function commonArrayMethods() {
    const numbers = [1, 2, 3, 4, 5];
    numbers.push(6); // Adds an element to the end
    numbers.pop(); // Removes the last element
    numbers.shift(); // Removes the first element
    numbers.unshift(0); // Adds an element to the beginning
    const sliced = numbers.slice(1, 3); // Creates a new array with selected elements
    return { numbers, sliced };
  }
  
  // Instantiate and call
  console.log(commonArrayMethods());
  
  /**
   * Summary:
   * 
   * Common array methods like push, pop, shift, unshift, and slice are essential for manipulating arrays.
   */
  