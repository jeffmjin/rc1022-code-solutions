/* exported initial */

// define a function with one parameter array
// set an empty array to a new variable
// use a for loop to loop through the length of array
// sets var i to 0
// checks i is less than the length of array
// increments i
// in the code block, access the array at index length of array - 1 and pushes the result to empty array
// return empty array

function initial(array) {
  var arr = [];
  for (var i = 0; i < array.length - 1; i++) {
    arr.push(array[i]);
  }
  return arr;
}

// define a function with one parameter array
// set an empty array to a new variable
// use a for loop to loop through the length of array
// sets var i to 0
// checks i is less than the length of array - 1
// increments i
// in the code block, access the array at index i and pushes the result to empty array
// return empty array
