var books = [
  {
    isbn: 'B09QMHZ53K',
    title: 'Demon Copperhead: A Novel',
    author: 'Barbara Kingsolver'
  },
  {
    isbn: 'B09PL5CV2D',
    title: 'The Door of No Return',
    author: 'Kwame Alexander'
  },
  {
    isbn: 'B09Q89CG86',
    title: 'Visual Thinking: The Hidden Gifts of People',
    author: 'Temple Grandin'
  }
];

console.log('Books:', books);
console.log('typeof Books:', typeof books);

var bookStrings = JSON.stringify(books);
console.log('JSON strings:', bookStrings);
console.log('typeof JSON strings:', typeof bookStrings);

var student = '{"numberId": "000111", "name": "Jeff Jin"}';
console.log('student string:', student);
console.log('typeof student string:', typeof student);

var parse = JSON.parse(student);
console.log('student JSON parse:', parse);
console.log('typeof student JSON parse:', typeof parse);
