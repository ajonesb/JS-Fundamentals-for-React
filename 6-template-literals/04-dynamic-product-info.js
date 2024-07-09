/**
 * Template Literals: Dynamic Product Info
 * 
 * Creating dynamic product information using template literals.
 */

export function getProductInfo(productName, productPrice) {
    return `The price of the ${productName} is $${productPrice}.`;
  }
  
  // Instantiate and call
  console.log(getProductInfo("Laptop", 1200));
  
  /**
   * Summary:
   * 
   * Template literals help create dynamic content like product information easily and concisely.
   */
  