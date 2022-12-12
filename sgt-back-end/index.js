const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

app.get('/api/grades', (req, res) => {

  const sql = `
  select *
    from "grades"
    `;

  db.query(sql)
    .then((result) => {
      const allGrades = result.rows;
      res.status(200).json(allGrades);
    });
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});
