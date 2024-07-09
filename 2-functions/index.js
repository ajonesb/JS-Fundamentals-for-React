/**
 * Introduction:
 *
 * This `index.js` file serves as the entry point for demonstrating various JavaScript function concepts.
 * It imports functions from the `basic` and `examples` directories and calls them to showcase their functionality.
 * This file provides practical examples of how to use different types of functions,
 * from basic declarations to advanced concepts like memoization, currying, and asynchronous programming.
 */

import { greet } from "./basic/01-greet.js";
import { square } from "./basic/02-square.js";
import { add } from "./basic/03-add.js";

import { greetUser } from "./examples/04-greetUser.js";
import { sum } from "./examples/05-sum.js";
import { fetchData } from "./examples/06-fetchData.js";
import { createMultiplier } from "./examples/07-createMultiplier.js";
import { outerFunction } from "./examples/08-outerFunction.js";
import { factorial } from "./examples/09-factorial.js";
import { applyOperation } from "./examples/10-applyOperation.js";
import { fetchDataAsync } from "./examples/11-fetchDataAsync.js";
import { fetchDataWithPromise } from "./examples/12-fetchDataWithPromise.js";
import { fetchDataWrapperWithErrors } from "./examples/13-fetchDataWrapperWithErrors.js";
import { memoizeFunction } from "./examples/14-memoizeFunction.js";
import { curryFunction, multiply } from "./examples/15-curryFunction.js";
import { partialFunction, power } from "./examples/16-partialFunction.js";
import { composeFunctions } from "./examples/composeFunctions.js";
import { memoizeFunctionWithWeakMap } from "./examples/18-memoizeFunctionWithWeakMap.js";
import { memoizeFunctionWithMapAndSymbol } from "./examples/19-memoizeFunctionWithMapAndSymbol.js";

// Basic functions
console.log(greet("Alice"));
console.log(`Square of 4: ${square(4)}`);
console.log(`Sum: ${add(3, 5)}`);

// Example functions
console.log(greetUser("Alice"));
console.log(greetUser());

console.log(`Sum of numbers: ${sum(1, 2, 3, 4, 5)}`);

fetchData("https://example.com/api", (data) => {
  console.log("Fetched data:", data);
});

const double = createMultiplier(2);
console.log(`Double of 5: ${double(5)}`);

const greeting = outerFunction();
console.log(greeting("Alice"));

console.log(`Factorial of 5: ${factorial(5)}`);

const addNumbers = (x, y) => x + y;
const subtractNumbers = (x, y) => x - y;

console.log(`Addition: ${applyOperation(5, 3, addNumbers)}`);
console.log(`Subtraction: ${applyOperation(5, 3, subtractNumbers)}`);

fetchDataWrapper("https://example.com/api");

fetchDataWithPromise("https://example.com/api")
  .then((data) => console.log("Fetched data:", data))
  .catch((error) => console.error("Error:", error));

fetchDataWrapperWithErrors("https://example.com/api");

const memoizedAdd = memoizeFunction(add);
console.log(`Memoized addition: ${memoizedAdd(3, 5)}`);
console.log(`Memoized addition: ${memoizedAdd(3, 5)}`);

const curriedMultiply = curryFunction(multiply);
console.log(`Curried multiplication: ${curriedMultiply(2)(3)(4)}`);

const squareNumber = partialFunction(power, 2);
console.log(`Square of 5: ${squareNumber(5)}`);

const cubeNumber = partialFunction(power, 3);
console.log(`Cube of 5: ${cubeNumber(5)}`);

const addOne = (x) => x + 1;
const multiplyByTwo = (x) => x * 2;

const addOneAndMultiplyByTwo = composeFunctions(multiplyByTwo, addOne);
console.log(`Result: ${addOneAndMultiplyByTwo(5)}`);

const memoizedAddWithWeakMap = memoizeFunctionWithWeakMap(add);
console.log(`Memoized addition: ${memoizedAddWithWeakMap(3, 5)}`);
console.log(`Memoized addition: ${memoizedAddWithWeakMap(3, 5)}`);

const memoizedAddWithMapAndSymbol = memoizeFunctionWithMapAndSymbol(add);
console.log(`Memoized addition: ${memoizedAddWithMapAndSymbol(3, 5)}`);
console.log(`Memoized addition: ${memoizedAddWithMapAndSymbol(3, 5)}`);

/**
 * Summary:
 *
 * This `index.js` file demonstrates the use of various JavaScript function concepts by importing and calling
 * functions from the `basic` and `examples` directories.
 * It covers a wide range of topics including basic function declarations, arrow functions, default and rest parameters,
 * callbacks, higher-order functions, closures, recursion, asynchronous programming, error handling, memoization,
 * currying, partial application, and function composition.
 * This comprehensive overview helps in understanding how to effectively use functions in JavaScript,
 * which is fundamental for building modular, maintainable, and efficient code in JavaScript and React applications.
 */
