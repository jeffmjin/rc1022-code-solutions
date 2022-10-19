var a = 1;
var b = 2;
var c = 3;
var maximumValue = Math.max(a, b, c);
console.log('maximumValue:', maximumValue);

var heroes = ['Superman', 'Batman', 'Spiderman', 'IronMan'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Sundial',
    author: 'Catriona Ward'
  },
  {
    title: 'Cackle',
    author: 'Rachel Harrison'
  },
  {
    title: 'Ghost Eaters: A Novel',
    author: 'Clay Chapman'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Jeff Jin';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
