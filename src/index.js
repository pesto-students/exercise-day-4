/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-prototype-builtins */
// NOTE: Do not use for or while loop, or Array.forEach in any of these questions

const dataset = require('./dataset.json');

// 1 (*)
function squareNumbersArray(arr) {
  if (!Array.isArray(arr) || !arr.map(elem => typeof elem).every(t => t === 'Number')) {
    throw new Error('My custom error');
  }

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

function validateEmail(email) {
  // eslint-disable-next-line
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

class SavingsAccount {
  constructor(accountNumber, email, firstName, lastName) {
    if (typeof accountNumber !== 'string' || accountNumber.length !== 6) {
      throw new Error('Account Number must be a 6-digit number');
    }

    if (typeof email !== 'string' || !validateEmail(email)) {
      throw new Error('Invalid e-mail');
    }

    if (typeof firstName !== 'string' || firstName.length < 3 || firstName.length > 20) {
      throw new Error('First name must be between 3 and 20 characters long');
    }

    if (typeof lastName !== 'string' || /[^A-Za-z]/.test(lastName)) {
      throw new Error('Last name must contain english alphabets only');
    }

    this._accountNumber = accountNumber;
    this._email = email;
    this._firstName = firstName;
    this._lastName = lastName;
    this.products = [];
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    const prevVal = this._firstName;
    this._firstName = value;
    return prevVal;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    const prevVal = this._lastName;
    this._lastName = value;
    return prevVal;
  }

  get email() {
    return this._email;
  }
  set email(value) {
    const prevVal = this._email;
    this._email = value;
    return prevVal;
  }

  addProduct(prod) {
    this.products.push(prod);
    return this.products;
  }
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
  const validMethods = ['GET', 'POST', 'DELETE'];
  if (!obj.hasOwnProperty('method') || validMethods.indexOf(obj.method) === -1) {
    throw new Error('Invalid request header: Invalid Method');
  }

  if (!obj.hasOwnProperty('uri') || !(obj.uri === '*' || /^[A-Za-z0-9.]+$/.test(obj.uri))) {
    throw new Error('Invalid request header: Invalid URI');
  }

  const validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  if (!obj.hasOwnProperty('version') || validVersions.indexOf(obj.version) === -1) {
    throw new Error('Invalid request header: Invalid Version');
  }

  if (!obj.hasOwnProperty('message') || /[<>&'"\\]/.test(obj.message)) {
    throw new Error('Invalid request header: Invalid Message');
  }

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
function hundredThousandairs() {
  return dataset.bankBalances.filter(acc => acc.amount > 100000);
}

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
function datasetWithRoundedDollar() {
  return dataset.bankBalances.map((acc) => {
    acc.rounded = Math.round(acc.amount);
    return acc;
  });
}

// 8 (*)
// Return the sum of all values held at `amount` for each bank object
function sumOfBankBalances() {
  const bankBalancesSum =
    dataset.bankBalances.reduce((accum, account) => accum + Number(account.amount), 0);
  return Number(bankBalancesSum.toFixed(2));
}

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
function sumOfInterests() {
  const selectedStates = ['WI', 'IL', 'WY', 'OH', 'GA', 'DE'];
  return Number(dataset.bankBalances.reduce((accum, account) => {
    if (selectedStates.indexOf(account.state) === -1) return accum;

    const interest = Number((Number(account.amount) * 0.189).toFixed(2));
    return accum + interest;
  }, 0).toFixed(2));
}

/* 10 (*)
  Aggregate the sum of each state into one hash table
  Return the sum of all states with totals greater than 1,000,000
 */
function higherStateSums() {
  const stateSums = {};
  let qualifyingStates = {};

  dataset.bankBalances.forEach((acc) => {
    if (stateSums[acc.state] === undefined) stateSums[acc.state] = 0;

    stateSums[acc.state] += Number(acc.amount);

    if (stateSums[acc.state] > 1000000) qualifyingStates[acc.state] = 1;
  });

  qualifyingStates = Object.keys(qualifyingStates);

  let sum = 0;
  for (let i = 0; i < qualifyingStates.length; i += 1) sum += stateSums[qualifyingStates[i]];

  return Number(sum.toFixed(2));
}

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
