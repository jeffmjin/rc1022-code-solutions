const express = require('express');
const app = express();

app.use(function (req, res) {
  // eslint-disable-next-line no-console
  console.log(req.method);
  res.set('Content-Type', 'text/html');
  res.send('Hello!');
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Lisening on port 3000!');
});
