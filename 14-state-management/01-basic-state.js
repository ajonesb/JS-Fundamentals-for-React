/**
 * State Management: Basic Example
 * 
 * Demonstrates immutable state updates using a function and the spread operator.
 */

let stateOne = { count: 0 };

/**
 * Function to update stateOne with new state values
 * @param {Object} newState - New state values to update
 */
export function updateStateOne(newState) {
  stateOne = { ...stateOne, ...newState }; // Use spread operator to merge states (immutability)
  console.log(stateOne); // Log updated state
}

// Instantiate and call
updateStateOne({ count: stateOne.count + 1 });
updateStateOne({ isLoggedIn: true });

/**
 * Summary:
 * 
 * Basic state management involves creating an initial state and updating it immutably using functions.
 */
