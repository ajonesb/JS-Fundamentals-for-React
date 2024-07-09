/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various event listener techniques in JavaScript.
 * It imports functions from the `event-listeners` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to use event listeners, manage event propagation, create custom events, and use event options.
 */

import { addButtonClickListener } from './01-basic-event-listener.js';
import { addPropagationListeners } from './02-event-propagation.js';
import { triggerCustomEvent } from './03-custom-events.js';
import { addListClickListener } from './04-event-delegation.js';
import { addAndRemoveClickListener } from './05-removing-event-listeners.js';
import { addButtonClickListenerWithOptions } from './06-event-options.js';

// Call the functions for demonstration (ensure the elements with IDs exist in the HTML)
addButtonClickListener("myButton");
addPropagationListeners("parent", "child");
triggerCustomEvent("customEvent");
addListClickListener("myList");
addAndRemoveClickListener("myElement");
addButtonClickListenerWithOptions("myButton");

/**
 * Summary:
 * 
 * This `index.js` file demonstrates the use of various event listener techniques in JavaScript by importing and calling
 * functions from the `event-listeners` directory.
 * It covers a wide range of topics including basic event listeners, event propagation, custom events, event delegation,
 * and event options.
 * This comprehensive overview helps in understanding how to effectively use event listeners in JavaScript,
 * which is fundamental for building interactive and responsive web applications in JavaScript and React.
 */
