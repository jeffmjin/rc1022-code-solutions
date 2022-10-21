/* exported capitalize */

// define a function with one parameter word
// use the uppercase method of string at index 0

function capitalize(word) {
  var capital = word[0].toUpperCase();
  var split = word.substring(1);
  var splitTwo = split.toLowerCase();
  var final = capital + splitTwo;
  return final;
}

// define a function with one parameter word
// call the toUpperCase() method of word at index 0 and assign its return value to a new variable word
// call the substring() method of word and assign its return value to a new variable split
// call the toLowerCase() method of the variable split and assign its return value to a new variable splitTwo
// add the variables word + splitTwo and assign the result of the expression to a new variable final
// return final
