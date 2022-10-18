function convertMinutesToSeconds(minutes) {
  var sum = minutes * 60;
  return sum;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var result = '"' + 'Hey, ' + name + '"';
  return result;
}

var greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  var name = '"' + person.firstName + '"';
  return name;
}

var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var last = array[array.length - 1];
  return last;
}

var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
