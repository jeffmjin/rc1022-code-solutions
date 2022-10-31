/* exported chunk */

function chunk(array, size) {
  var arr = [];
  for (var i = 0; i < array.length; i += size) {
    var slice = array.slice(i, size + i);
    arr.push(slice);
  }
  return arr;
}
