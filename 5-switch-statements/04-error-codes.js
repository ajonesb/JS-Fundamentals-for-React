/**
 * Switch Statement: Error Codes
 * 
 * This example demonstrates how to use a switch statement to handle different types of errors.
 */

export function getErrorMessage(errorCode) {
    switch (errorCode) {
      case 404:
        return "Page not found";
      case 500:
        return "Internal server error";
      default:
        return "Unknown error";
    }
  }
  
  // Instantiate and call
  console.log(getErrorMessage(404));
  console.log(getErrorMessage(500));
  console.log(getErrorMessage(123));
  
  /**
   * Summary:
   * 
   * Including a default case in a switch statement can handle unexpected values and provide a fallback option.
   * This example shows how to handle different types of errors with a switch statement.
   */
  