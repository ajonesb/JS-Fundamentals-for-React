/**
 * Function: memoizeFunction
 * 
 * This function takes another function and returns a memoized version of it.
 * It demonstrates memoization for optimizing performance.
 */

export function memoizeFunction(func) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (cache[key]) {
        console.log("Fetching from cache...");
        return cache[key];
      } else {
        const result = func(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  // Instantiate and call
  const memoizedAdd = memoizeFunction((a, b) => a + b);
  console.log(`Memoized addition: ${memoizedAdd(3, 5)}`);
  console.log(`Memoized addition: ${memoizedAdd(3, 5)}`);
  
  /**
   * Summary:
   * 
   * The memoizeFunction demonstrates how to use memoization to optimize function performance.
   * Memoization is useful for expensive operations that are called frequently with the same arguments.
   */
  