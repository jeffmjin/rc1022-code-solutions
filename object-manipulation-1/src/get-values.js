/* exported getValues */

// assign an empty array to a new variable
// use a for in loop to loop through the object
// find the value of the object
// push the value of object to the empty array
// return the array

function getValues(object) {
  var arr = [];
  for (var keys in object) {
    arr.push(object[keys]);
  }
  return arr;
}

// no change
