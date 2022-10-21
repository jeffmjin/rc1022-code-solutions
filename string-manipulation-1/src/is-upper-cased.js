/* exported isUpperCased */

// define a function with one parameter word
// check if all characters in word are uppercased
// if its uppercased return false else return true

function isUpperCased(word) {
  var capital = word.toUpperCase();
  if (word === capital) {
    return true;
  } else {
    return false;
  }
}

// define a function with one parameter word
// call toUpperCase() method of the parameter word and assigns the result to a new variable
// check if any characters in word are uppercased
// if word is uppercased return true else return false
