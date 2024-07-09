/**
 * State Management: Closure Example
 * 
 * Demonstrates using closures to encapsulate state and provide methods to get and update state.
 */

/**
 * Creates a state manager with a closure
 * @param {Object} initialState - Initial state
 * @returns {Object} - Object with methods to get and update state
 */
export function createStateWithClosure(initialState) {
    let stateWithClosure = initialState;
  
    return {
      getStateWithClosure() {
        return stateWithClosure;
      },
  
      updateStateWithClosure(newState) {
        stateWithClosure = { ...stateWithClosure, ...newState }; // Use spread operator to merge states (immutability)
        console.log(stateWithClosure); // Log updated state
      },
    };
  }
  
  // Instantiate and call
  const appStateWithClosure = createStateWithClosure({ count: 0 });
  appStateWithClosure.updateStateWithClosure({
    count: appStateWithClosure.getStateWithClosure().count + 1,
  });
  appStateWithClosure.updateStateWithClosure({ isLoggedIn: true });
  
  /**
   * Summary:
   * 
   * Using closures to manage state encapsulates the state within a function scope, providing methods to get and update the state.
   */
  