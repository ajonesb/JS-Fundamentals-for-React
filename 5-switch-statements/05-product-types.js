/**
 * Switch Statement: Product Types
 * 
 * This example demonstrates how to use a switch statement to handle different types of products.
 */

export function getProductTypeMessage(productType) {
    switch (productType) {
      case "electronics":
        return "Electronic products";
      case "clothing":
        return "Clothing products";
      default:
        return "Unknown product type";
    }
  }
  
  // Instantiate and call
  console.log(getProductTypeMessage("electronics"));
  console.log(getProductTypeMessage("clothing"));
  console.log(getProductTypeMessage("furniture"));
  
  /**
   * Summary:
   * 
   * Switch statements provide clarity and efficiency when handling multiple conditions.
   * This example shows how to handle different types of products with a switch statement.
   */
  