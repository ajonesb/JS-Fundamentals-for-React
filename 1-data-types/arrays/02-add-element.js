/**
 * Arrays: Adding an Element
 * 
 * Adding an element to an array using the push method.
 */

export function addElement(array, element) {
    array.push(element);
    return array;
  }
  
  // Instantiate and call
  console.log(addElement(["Apple", "Banana", "Cherry"], "Orange"));
  
  /**
   * Summary:
   * 
   * The push method adds an element to the end of an array.
   */
  