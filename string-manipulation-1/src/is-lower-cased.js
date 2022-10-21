/* exported isLowerCased */

// define a function with one parameter word
// call the toLowerCase() method of word and assign the result to a new variable
// check if all characters in word are not lowercased
// if all characters are lowercased return true else false

function isLowerCased(word) {
  var low = word.toLowerCase();
  if (word === low) {
    return true;
  } else {
    return false;
  }
}

// things to change:
// call the toLowerCase() method of word and assign its return value to a new variable
