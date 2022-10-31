/* exported dropRight */

// assign the slice() method of array to a new variable
// for the method's argument you start at the beginning of the index
// -count will take it's second argument to "drop" from the end of array
// return the new variable

function dropRight(array, count) {
  var arr = array.slice(0, -count);
  return arr;
}

// no changes
