/* exported isVowel */

// define a function with one parameter char
// assign a string of vowels (uppercase & lowercase) to new variables
// check if char is a vowel
// if its a vowel return true else return false

function isVowel(char) {
  var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var i = 0; i < vowel.length; i++) {
    if (char === vowel[i]) {
      return true;
    }
  }
  return false;
}

// define a function with one parameter char
// create an array of strings of vowels and assign it to a new variable
// create a loop to loop through the length of the variable that was created
// check if characters has a vowel
// if it does return true otherwise return false
