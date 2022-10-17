var student = {
  firstName: 'Jeff',
  lastName: 'Jin',
  age: 28
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Dispatcher';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Nissan',
  model: 'NSX',
  year: 1992
};

vehicle['color'] = 'red';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Bob',
  type: 'Husky'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
