/* exported capitalizeWord */

function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  if (newWord === 'javascript') {
    newWord = 'JavaScript';
  } else {
    var lower = word.slice(1);
    var lowerTwo = lower.toLowerCase();
    var capital = word[0].toUpperCase();
    newWord = capital + lowerTwo;
  }
  return newWord;
}
