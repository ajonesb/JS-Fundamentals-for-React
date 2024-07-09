/**
 * Objects: Object.freeze and Object.seal
 * 
 * Demonstrates how to use Object.freeze and Object.seal.
 */

export function freezeAndSealExample(user) {
    Object.freeze(user);
    user.age = 25; // This will not change the age property
  
    const sealedUser = { ...user };
    Object.seal(sealedUser);
    sealedUser.age = 25; // This will change the age property
    sealedUser.city = "New York"; // This will not add a new property
    return { user, sealedUser };
  }
  
  // Instantiate and call
  console.log(freezeAndSealExample({ name: "Alice", age: 30 }));
  
  /**
   * Summary:
   * 
   * Object.freeze prevents modifications to an object, while Object.seal allows modifications but prevents adding new properties.
   */
  