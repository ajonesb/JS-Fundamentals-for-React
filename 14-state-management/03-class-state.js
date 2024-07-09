/**
 * State Management: Class Example
 * 
 * Demonstrates using a class to encapsulate state and provide methods to get and update state.
 */

export class StateManager {
    constructor(initialState) {
      this.state = initialState;
    }
  
    getState() {
      return this.state;
    }
  
    updateState(newState) {
      this.state = { ...this.state, ...newState }; // Use spread operator to merge states (immutability)
      console.log(this.state); // Log updated state
    }
  }
  
  // Instantiate and call
  const appState = new StateManager({ count: 0 });
  appState.updateState({ count: appState.getState().count + 1 });
  appState.updateState({ isLoggedIn: true });
  
  /**
   * Summary:
   * 
   * Using a class to manage state encapsulates the state within a class, providing methods to get and update the state.
   */
  