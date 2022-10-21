/* exported reverse */

// define a function with one parameter array
// assign empty array to a new variable
// uses a loop to loop through the length of array
// set var i to the length of array - 1
// i must be greater than or equal to 0
// decrements i
// in the code block, assigns array at index 0 and pushes the result into empty array
// return empty array

function reverse(array) {
  var arr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
}

// define a function with one parameter array
// assign empty array to a new variable
// uses a loop to loop through the length of array
// set var i to the length of array - 1 to start at the end of array
// no coditional expression is used
// i must be greater than or equal to 0
// decrements i
// in the code block, accesses array at index i and pushes the result into empty array
// return empty array
