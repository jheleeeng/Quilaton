const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Enter your MySQL password here if set
  database: 'signup'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

app.post('/signup', (req, res) => {
  const { first_name, middle_name, last_name, email, password } = req.body;
  const sql = 'INSERT INTO login (first_name, middle_name, last_name, email, password) VALUES (?, ?, ?, ?, ?)';
  const values = [first_name, middle_name, last_name, email, password];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    return res.status(200).json({ success: true });
  });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const sql = 'SELECT * FROM login WHERE email = ? AND password = ?';
    db.query(sql, [email, password], (err, data) => {
      if (err) {
        console.error('Error executing query:', err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      if (data.length > 0) {
        return res.json("Success");
      } else {
        return res.json("Failed");
      }
    });
  });
  

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
