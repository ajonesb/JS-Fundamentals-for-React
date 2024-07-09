/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various state management techniques in JavaScript.
 * It imports functions from the `state-management` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to manage state in JavaScript, using functions, closures, classes, and reducer functions.
 */

import { updateStateOne } from './01-basic-state.js';
import { createStateWithClosure } from './02-closure-state.js';
import { StateManager } from './03-class-state.js';
import { reducer } from './04-reducer-state.js';

// Call the functions for demonstration
updateStateOne({ count: 1, isLoggedIn: true });

const appStateWithClosure = createStateWithClosure({ count: 0 });
appStateWithClosure.updateStateWithClosure({
  count: appStateWithClosure.getStateWithClosure().count + 1,
});
appStateWithClosure.updateStateWithClosure({ isLoggedIn: true });

const appState = new StateManager({ count: 0 });
appState.updateState({ count: appState.getState().count + 1 });
appState.updateState({ isLoggedIn: true });

let state = { count: 0 };
state = reducer(state, { type: "INCREMENT" });
console.log(state);
state = reducer(state, { type: "DECREMENT" });
console.log(state);

/**
 * Summary:
 * 
 * This `index.js` file demonstrates various state management techniques in JavaScript by importing and calling
 * functions from the `state-management` directory.
 * It covers a wide range of topics including immutable state updates, closures, classes, and reducer functions.
 * This comprehensive overview helps in understanding how to effectively manage state in JavaScript,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
