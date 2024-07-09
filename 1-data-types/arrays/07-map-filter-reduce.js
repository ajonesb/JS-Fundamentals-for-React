/**
 * Arrays: Map, Filter, and Reduce
 * 
 * Using map, filter, and reduce methods to manipulate and process data in arrays.
 */

export function mapFilterReduce(array) {
    const mapped = array.map((num) => num * 2);
    const filtered = array.filter((num) => num > 2);
    const reduced = array.reduce((acc, num) => acc + num, 0);
    return { mapped, filtered, reduced };
  }
  
  // Instantiate and call
  console.log(mapFilterReduce([1, 2, 3, 4, 5]));
  
  /**
   * Summary:
   * 
   * The map, filter, and reduce methods are powerful tools for manipulating and processing data in arrays.
   */
  