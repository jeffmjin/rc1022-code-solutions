const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const a = Number(process.argv[2]);
const b = Number(process.argv[4]);
const operator = process.argv[3];

if (operator === 'plus') {
  console.log('result:', add(a, b));
} else if (operator === 'minus') {
  console.log('result:', subtract(a, b));
} else if (operator === 'times') {
  console.log('result:', multiply(a, b));
} else if (operator === 'over') {
  console.log('result:', divide(a, b));
} else {
  console.log('invalid operation');
}
