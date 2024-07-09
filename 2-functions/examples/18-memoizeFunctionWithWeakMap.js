/**
 * Function: memoizeFunctionWithWeakMap
 * 
 * This function takes another function and returns a memoized version using WeakMap for cache.
 * It demonstrates memoization with WeakMap for optimizing performance.
 */

export function memoizeFunctionWithWeakMap(func) {
    const cache = new WeakMap();
    return function(...args) {
      if (cache.has(args)) {
        console.log("Fetching from cache...");
        return cache.get(args);
      } else {
        const result = func(...args);
        cache.set(args, result);
        return result;
      }
    };
  }
  
  // Instantiate and call
  const memoizedAddWithWeakMap = memoizeFunctionWithWeakMap((a, b) => a + b);
  console.log(`Memoized addition: ${memoizedAddWithWeakMap(3, 5)}`);
  console.log(`Memoized addition: ${memoizedAddWithWeakMap(3, 5)}`);
  
  /**
   * Summary:
   * 
   * The memoizeFunctionWithWeakMap demonstrates how to use WeakMap for memoization to optimize function performance.
   * WeakMap is useful for memoization when working with objects as keys.
   */
  