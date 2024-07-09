/**
 * Destructuring: Array Destructuring
 * 
 * Extracting multiple elements from an array in a single statement.
 */

export function extractScores(scores) {
    const [math, science, english] = scores;
    return `Math score: ${math}, Science score: ${science}, English score: ${english}`;
  }
  
  // Instantiate and call
  const scores = [92, 85, 100];
  console.log(extractScores(scores));
  
  /**
   * Summary:
   * 
   * Array destructuring simplifies the extraction of multiple elements from arrays.
   */
  