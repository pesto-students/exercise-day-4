/* eslint-disable */

/** (*)
 * Return the remaining elements of an array after chopping
 * off n elements from the head.
 * The head means the beginning of the array, or the zeroth index.
 */
function slasher(arr, howMany) {
  arr.splice(0, howMany);
  return arr;
}

/** (*)
 * Write a function that splits an array (first argument) into groups the length of size
 * (second argument) and returns them as a two-dimensional array.
 * Refer Array.push() and Array.slice() IF STUCK.
 */
function chunkArrayInGroups(arr, size) {
  const result = [];
  let temp = [];
  arr.forEach((el) => {
    temp.push(el);
    if (temp.length === size) {
      result.push(temp);
      temp = [];
    }
  });
  if (temp.length > 0) {
    result.push(temp);
  }
  return result;
}
/** (*)
 * Create a function that looks through an array (first argument) and
 * returns the first element in the array that passes a truth test (second argument)
 */
function findElement(arr, func) {
  let n;
  for (let i = 0; i < arr.length; i += 1) {
    if (func(arr[i])) {
      n = arr[i];
      return n;
    }
  }
  return n;
}
// findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });


/** (*)
 * Drop the elements of an array (first argument), starting from the
 * front, until the predicate (second argument) returns true.
 * The second argument, func, is a function you'll use to test the first
 * elements of the array to decide if you should drop it or not.
 * Return the rest of the array, otherwise return an empty array.
 */
function dropElements(arr, func) {

  while (!func(arr[0])) {
    arr.shift();
  }
  return arr;
}
/** (*)
 * Compare and update the inventory stored in a 2D array against a second 2D array of a
 * fresh delivery. Update the current existing inventory item quantities (in arr1).
 * If an item cannot be found, add the new item and quantity into the inventory array.
 * The returned inventory array should be in alphabetical order by item.
 */
function updateInventory(arr1, arr2) {

}

// Example inventory lists
// var curInv = [
//   [21, "Bowling Ball"],
//   [2, "Dirty Sock"],
//   [1, "Hair Pin"],
//   [5, "Microphone"]
// ];

// var newInv = [
//   [2, "Hair Pin"],
//   [3, "Half-Eaten Apple"],
//   [67, "Bowling Ball"],
//   [7, "Toothpaste"]
// ];

/** (*)
 * Find the smallest common multiple of the provided parameters that
 * can be evenly divided by both, as well as by all sequential numbers
 * in the range between these parameters.
 * The range will be an array of two numbers that will not
 * necessarily be in numerical order.
 * e.g. for 1 and 3 - find the smallest common multiple of
 * both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
 */
function smallestCommons(arr) {

}

/** (*)
 * Check if the predicate (second argument) is truthy on all
 * elements of a collection (first argument).
 * Remember, you can access object properties through either
 * dot notation or [] notation.
 */
function truthCheck(collection, pre) {

}

/** (*)
 * Return a new array that transforms the element's average altitude into their orbital periods.
 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
 * You can read about orbital periods on wikipedia.
 * The values should be rounded to the nearest whole number. The body being orbited is Earth.
 * The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
 */
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
}
// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

// (*)
const keys = (obj) => {
  // Retrieve all the names of the object's properties.
  // Return the keys as strings in an array.
  // Based on http://underscorejs.org/#keys
};

// (*)
const values = (obj) => {
  // Return all of the values of the object's own properties.
  // Ignore functions
  // http://underscorejs.org/#values
};

// (*)
const mapObject = (obj, cb) => {
  // Like map for arrays, but for objects. Transform the value of each property in turn.
  // http://underscorejs.org/#mapObject
};

// (*)
const pairs = (obj) => {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs
};

// (*)
const invert = (obj) => {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert
};

// (*)
const defaults = (obj, defaultProps) => {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults
};


// (*)
// Follow the instructions and fill in the blank sections.

function User(username, password) {
  // set a username and password property on the user object that is created
}

// create a method on User called `checkPassword`
// this method should take in a string and compare it to the object's password property
// return `true` if they match, otherwise return `false`

User.prototype.checkPassword = function checkPassword(password) {

};

/* eslint-enable no-unused-vars */

module.exports = {
  slasher,
  chunkArrayInGroups,
  findElement,
  dropElements,
  updateInventory,
  smallestCommons,
  truthCheck,
  orbitalPeriod,
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults,
  User,
};