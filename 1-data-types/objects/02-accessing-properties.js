/**
 * Objects: Accessing Properties
 * 
 * Demonstrates how to access and modify object properties.
 */

export function accessProperties(car) {
    return {
      model: car.model,
      color: car.color || "undefined",
    };
  }
  
  // Instantiate and call
  const car = { make: "Toyota", model: "Corolla", year: 2021 };
  console.log(accessProperties(car));
  
  /**
   * Summary:
   * 
   * Accessing and modifying object properties is essential for manipulating data in objects.
   */
  