/* exported truncate */

// use the slice() method of string and
// concatenate elipsis
// return the method

function truncate(length, string) {
  var trun = string.slice(0, length) + '...';
  return trun;
}

// no changes
