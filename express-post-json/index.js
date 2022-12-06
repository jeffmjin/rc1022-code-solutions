const express = require('express');
const app = express();

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const student in grades) {
    array.push(grades[student]);
  }
  res.json(array);
});

const json = express.json();
app.use(json);

app.post('/api/grades', (req, res) => {
  const postGrade = req.body;
  postGrade.id = nextId;
  grades[nextId] = postGrade;
  nextId++;
  res.status(201).json(postGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
