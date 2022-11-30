const fs = require('fs');
const random = Math.random();
const data = random + '\n';
fs.writeFile('random.txt', data, err => {
  if (err) throw err;
});
