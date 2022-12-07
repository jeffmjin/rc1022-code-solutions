const express = require('express');
const app = express();
const json = require('./data.json');
const fs = require('fs');


app.get('/api/notes', (req, res) => {
  const array = [];
  for (const id in json.notes) {
    array.push(json.notes[id]);
  }
  res.status(200).json(array);
});

app.get('/api/notes/:id', (req, res) => {
  const reqId = Number(req.params.id);
  if (reqId < 1 || isNaN(reqId) === true) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (json.notes[reqId] === undefined) {
    res.status(404).json({ error: 'cannot find notes with id' });
  } else {
    res.status(200).json(json.notes[reqId]);
  }
});

app.use(express.json());

app.post('/api/notes', (req, res) => {
  const content = req.body.content;
  if (!content) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const newNote = {
      id: json.nextId,
      content
    };
    json.nextId++;
    json.notes[newNote.id] = newNote;
    fs.writeFile('data.json', JSON.stringify(json, null, 2), 'utf-8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occured.'});
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const reqId = Number(req.params.id);
  if (reqId < 1 || isNaN(reqId) === true) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (json.notes[reqId] === undefined) {
    res.status(404).json({ error: 'cannot find note with id' });
  } else {
    delete json.notes[req.params.id];
    res.sendStatus(204);
    fs.writeFile('derp/data.json', JSON.stringify(json, null, 2), 'utf-8', err => {
      if (err) {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
