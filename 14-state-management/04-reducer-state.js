/**
 * State Management: Reducer Example
 * 
 * Demonstrates using a reducer function to handle state updates based on action types.
 */

/**
 * Reducer function to manage state updates based on action type
 * @param {Object} state - Current state
 * @param {Object} action - Action with type to determine state update
 * @returns {Object} - Updated state
 */
export function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }
  
  // Instantiate and call
  let state = { count: 0 };
  state = reducer(state, { type: "INCREMENT" });
  console.log(state);
  state = reducer(state, { type: "DECREMENT" });
  console.log(state);
  
  /**
   * Summary:
   * 
   * Using a reducer function to manage state updates is similar to the pattern used in Redux, handling state changes based on actions.
   */
  