/* exported takeRight */

// assign the slice() method of array to a new variable
// will take -count as its argument since starting at the end of array
// return the new variable
function takeRight(array, count) {
  var arr = array.slice(-count);
  return arr;
}

// no changes
