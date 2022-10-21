/* exported tail */

// define a function with one parameter (array)
// set an empty array to a new variable
// use a for loop to loop through the length of array
// subtracts array index to the length of array
// return the empty array

function tail(array) {
  var arr = [];
  for (var i = 1; i < array.length; i++) {
    var newArray = array[i];
    arr.push(newArray);
  }
  return arr;
}

// define a function with one parameter (array)
// set an empty array to a new variable
// use a for loop to loop through the length of array
// assigns 1 to var i so that index 0 is not included
// checks that i is less than the length of array
// increments i
// in its code block, accesses the element of the array at index i and pushes the result into the empty array
// return the empty array
