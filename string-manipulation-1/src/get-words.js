/* exported getWords */

function getWords(string) {
  var array = [];
  var strings = string.split(' ');
  if (string === '') {
    return array;
  } else {
    return strings;
  }
}
