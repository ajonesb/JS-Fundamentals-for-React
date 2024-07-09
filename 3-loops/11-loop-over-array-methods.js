/**
 * Loop: Looping Over an Array with Various Methods
 * 
 * This example demonstrates various array iteration methods such as forEach, map, filter, and reduce.
 */

export function loopWithArrayMethods() {
    const numbers = [1, 2, 3];
  
    // forEach
    numbers.forEach((number) => {
      console.log(number);
    });
  
    // map
    const doubledNumbers = numbers.map((number) => number * 2);
    console.log(doubledNumbers);
  
    // filter
    const evenNumbers = numbers.filter((number) => number % 2 === 0);
    console.log(evenNumbers);
  
    // reduce
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    console.log(sum);
  
    // some
    const hasNegative = numbers.some((number) => number < 0);
    console.log(hasNegative);
  
    // every
    const allPositive = numbers.every((number) => number > 0);
    console.log(allPositive);
  
    // find
    const foundNumber = numbers.find((number) => number === 2);
    console.log(foundNumber);
  
    // findIndex
    const foundIndex = numbers.findIndex((number) => number === 2);
    console.log(foundIndex);
  
    // indexOf
    const index = numbers.indexOf(2);
    console.log(index);
  
    // lastIndexOf
    const lastIndex = numbers.lastIndexOf(2);
    console.log(lastIndex);
  
    // includes
    const includesTwo = numbers.includes(2);
    console.log(includesTwo);
  }
  
  // Instantiate and call
  loopWithArrayMethods();
  
  /**
   * Summary:
   * 
   * JavaScript provides various array iteration methods that offer different ways to process arrays efficiently.
   * Understanding these methods is crucial for working with data in JavaScript and React.
   */
  