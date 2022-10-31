/* exported includes */

// add an if statement to check if value is in the array
// if value is in the array the boolean value is true else false

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// use a for loop to loop through the length of array
// use if statement to check if value is in the array at index
// if or if not a value is in the array at index return a boolean value
