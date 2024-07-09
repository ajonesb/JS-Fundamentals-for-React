/**
 * Numbers: Math Object
 * 
 * Demonstrates the use of the Math object for more complex operations.
 */

export function mathOperations(a) {
    return {
      power: Math.pow(a, 2),
      squareRoot: Math.sqrt(a),
      round: Math.round(a),
      ceil: Math.ceil(a),
      floor: Math.floor(a),
    };
  }
  
  // Instantiate and call
  console.log(mathOperations(5.6));
  
  /**
   * Summary:
   * 
   * The Math object provides methods for mathematical operations like power, square root, round, ceil, and floor.
   */
  