/* exported getKeys */

// Assign an empty array to a new variable
// Use a loop to loop through the object
// push the keys into a new array
// return the array

function getKeys(object) {
  var arr = [];
  for (var keys in object) {
    arr.push(keys);
  }
  return arr;
}

// things to fix
// Use a for in loop to loop through the object
// push the var keys into the empty array
