/**
 * Numbers: Number Methods
 * 
 * Demonstrates various number methods.
 */

export function numberMethods(number) {
    return {
      toFixed: number.toFixed(1),
      toPrecision: number.toPrecision(2),
      valueOf: Number(number).valueOf(),
      integerValue: Number.parseInt(number),
      floatValue: Number.parseFloat(number),
    };
  }
  
  // Instantiate and call
  console.log(numberMethods("123.456"));
  
  /**
   * Summary:
   * 
   * The Number object provides methods for number manipulation such as toFixed, toPrecision, parseInt, and parseFloat.
   */
  