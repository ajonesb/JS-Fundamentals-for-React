/**
 * Introduction:
 * 
 * This `index.js` file serves as the entry point for demonstrating various DOM manipulation techniques in JavaScript.
 * It imports functions from the `dom-manipulation` directory and calls them to showcase their functionality.
 * This file provides practical examples of how to manipulate the DOM, including selecting elements, adding event listeners,
 * changing text content and styles, creating and removing elements, and manipulating classes and attributes.
 */

import { selectElement } from './01-select-element.js';
import { addClickListener } from './02-add-event-listener.js';
import { changeTextContent } from './03-change-text-content.js';
import { changeStyle } from './04-change-style.js';
import { createElement } from './05-create-element.js';
import { appendElement } from './06-append-element.js';
import { removeElement } from './07-remove-element.js';
import { replaceElement } from './08-replace-element.js';
import { cloneElement } from './09-clone-element.js';
import { selectMultipleElements } from './10-query-multiple-elements.js';
import { iterateOverElements } from './11-iterate-over-elements.js';
import { addClass, removeClass, toggleClass, hasClass } from './12-class-manipulation.js';
import { getAttribute, setAttribute } from './13-attribute-manipulation.js';

// Call the functions for demonstration
const element = selectElement('.my-element');
addClickListener(element, () => console.log('Element clicked'));
changeTextContent(element, 'New text content');
changeStyle(element, 'color', 'red');

const newElement = createElement('div');
appendElement(element, newElement);
removeElement(element, newElement);

const anotherNewElement = createElement('span');
replaceElement(newElement, anotherNewElement);

const clonedElement = cloneElement(element);
console.log(clonedElement);

const elements = selectMultipleElements('.my-elements');
iterateOverElements(elements, (el) => console.log(el));

addClass(element, 'my-class');
removeClass(element, 'my-class');
toggleClass(element, 'my-class');
console.log(hasClass(element, 'my-class'));

setAttribute(element, 'id', 'new-id');
console.log(getAttribute(element, 'id'));

/**
 * Summary:
 * 
 * This `index.js` file demonstrates various DOM manipulation techniques in JavaScript by importing and calling
 * functions from the `dom-manipulation` directory.
 * It covers a wide range of topics including selecting elements, adding event listeners, changing text content and styles,
 * creating and removing elements, manipulating classes and attributes, and cloning elements.
 * This comprehensive overview helps in understanding how to effectively manipulate the DOM,
 * which is fundamental for building interactive web applications in JavaScript and React.
 */
