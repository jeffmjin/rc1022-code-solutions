const express = require('express');
const path = require('path');
const app = express();

const joinPath = path.join(__dirname, 'public');
// eslint-disable-next-line no-console
console.log('path.join', joinPath);

const middleware = express.static(joinPath);

app.use(middleware);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
})
