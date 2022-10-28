/* exported toObject */

// assign an empty object to a new variable
// find the first index (the key of object) of array and
// second index (the value of object) of array
// the second index will be returned to the object at the first index of array
// return empty object

function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}

// no change
