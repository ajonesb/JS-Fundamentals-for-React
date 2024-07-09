/**
 * Function: memoizeFunctionWithMapAndSymbol
 * 
 * This function takes another function and returns a memoized version using Map and Symbol for cache.
 * It demonstrates memoization with Map and Symbol for optimizing performance.
 */

export const memoizeFunctionWithMapAndSymbol = (func) => {
    const cache = new Map();
    return function(...args) {
      const key = Symbol();
      if (cache.has(key)) {
        console.log("Fetching from cache...");
        return cache.get(key);
      } else {
        const result = func(...args);
        cache.set(key, result);
        return result;
      }
    };
  };
  
  // Instantiate and call
  const memoizedAddWithMapAndSymbol = memoizeFunctionWithMapAndSymbol((a, b) => a + b);
  console.log(`Memoized addition: ${memoizedAddWithMapAndSymbol(3, 5)}`);
  console.log(`Memoized addition: ${memoizedAddWithMapAndSymbol(3, 5)}`);
  
  /**
   * Summary:
   * 
   * The memoizeFunctionWithMapAndSymbol demonstrates how to use Map and Symbol for memoization to optimize function performance.
   * Map and Symbol are useful for creating unique keys for memoization.
   */
  