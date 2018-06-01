/* eslint-disable no-unused-vars */
// NOTE: Do not use for or while loop, or Array.forEach in any of these questions

const dataset = require('./dataset.json');

// 1 (*)
function squareNumbersArray(arr) {
  const squares = arr.map(number => number * number);
  return squares;
}

/** 2
 * Write a class for a checking account that validates it’s created with valid parameters.
 * A SavingsAccount has an accountNumber, email, firstName, lastName all set through the
 * constructor and an array of products that is initially empty.
 * Don't forget to use getters and setters
 * Each parameter must meet specific requirements (see test cases for SavingsAccount)
 */

class SavingsAccount {

}

/** 3 (*)
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

/* 4
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

function memoize() {}

/* 5
Here's the basic usage of the function that you'll be creating:

function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add); <- this is the curry function
console.log(  curriedAdd(1)(2)  ); // 3
See 'curry' tests for further info of the requirement
*/
function curry() {}

/* 6 (*)
  Return an array with accounts from bankBalances that are
  greater than 100000 without using for or while loop
*/
function hundredThousandairs() {}

/* 7 (*)
  DO NOT MUTATE DATA.

  Return a new dataset where each bank object is a new object.
  `amount` and `state` values will be transferred to the new object.
  This new object is different, you will add one new key of `rounded`

  `rounded` value is `amount` rounded to the nearest dollar

  Example:
    {
      "amount": "134758.44",
      "state": "HI",
      "rounded": 134758
    }
*/
function datasetWithRoundedDollar() {}

// 8 (*)
// Return the sum of all values held at `amount` for each bank object
function sumOfBankBalances() {}

/* 9 (*)
  from each of the following states:
    Wisconsin
    Illinois
    Wyoming
    Ohio
    Georgia
    Delaware
  take each `amount` and add 18.9% interest to it rounded to the nearest cent
  and then sum it all up into one value saved to `sumOfInterests`
 */
function sumOfInterests() {}

/* 10 (*)
  Aggregate the sum of each state into one hash table
  Return the sum of all states with totals greater than 1,000,000
 */
function higherStateSums() {}

module.exports = {
  squareNumbersArray,
  SavingsAccount,
  requestValidator,
  memoize,
  curry,
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums,
};
