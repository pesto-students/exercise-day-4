/* eslint-disable no-unused-vars */

// (*)
function squareNumbersArray(arr) {
  const squares = arr.map(number => number * number);
  return squares;
}

/**
 * Write a class for a checking account that validates it’s created with valid parameters.
 * A SavingsAccount has an accountNumber, email, firstName, lastName all set through the
 * constructor and an array of products that is initially empty.
 * Don't forget to use getters and setters
 * Each parameter must meet specific requirements (see test cases for SavingsAccount)
 */

class SavingsAccount {

}

/** (*)
 * Write a JS function that validates an HTTP request object.
 * The object has the properties method, uri, version and message.
 * Your function must receive the object as a parameter and verify
 * that each property meets the following requirements:
 * method – can be GET, POST or DELETE
 * uri – must be a valid resource address or an asterisk (*); a resource address is a
 * combination of alphanumeric characters and periods(.); the URI cannot be an empty string
 * version – can be HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 supplied as a string
 * message – may contain any number of non-special characters;
 * special characters are <, >, \, &, ', "
 * If a request is valid, return it unchanged. If any part fails the check,
 * throw an Error with message "Invalid request header: Invalid {Method/URI/Version/Message}".
 * Replace the part in curly braces with the relevant word. Note that some of the properties may
 * be missing, in which case the request is invalid. Check the properties in the order in which they
 * are listed here. If more than one property is invalid, throw an error for the first encountered.
 * Check the requestValidator test cases for further information.
 */
function requestValidator(obj) {
  return obj;
}

/*
Create a function that caches another function
Example:

function expensiveOperation() {
  console.log('expensiveOperation function is called!');
  return 22;
}
const memoized = memoize(expensiveOperation); <- memoize function
console.log(memoized());
console.log(memoized());

the console should show:
expensiveOperation function is called!
22
22

See 'memoize' tests for further info of the requirement
*/

function memoize(f) {
  const cache = {};
  return (...args) => {
    const argsString = JSON.stringify(args);
    cache[argsString] = cache[argsString] || f(...args);
    return cache[argsString];
  };
}

/*
Here's the basic usage of the function that you'll be creating:

function add(a, b) {
  return a + b;
}

var curriedAdd = curry(add); <- this is the curry function
console.log(  curriedAdd(1)(2)  ); // 3
See 'curry' tests for further info of the requirement
*/
function curry(fn) {

}

module.exports = {
  squareNumbersArray,
  SavingsAccount,
  requestValidator,
  memoize,
  curry,
};
