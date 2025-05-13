require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Initialize the app and set up middleware
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Establish a connection
db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Create a table for To-Do list (only needs to run once)
const createTableQuery = `
CREATE TABLE IF NOT EXISTS todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task VARCHAR(255) NOT NULL,
  completed BOOLEAN DEFAULT false
);
`;

db.query(createTableQuery, (err) => {
  if (err) throw err;
  console.log('Table created or already exists');
});

// Routes for the API
// Get all To-Dos
app.get('/todos', (req, res) => {
  db.query('SELECT * FROM todos', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new To-Do
app.post('/todos', (req, res) => {
  const { task } = req.body;
  db.query('INSERT INTO todos (task) VALUES (?)', [task], (err, results) => {
    if (err) throw err;
    res.status(201).json({ id: results.insertId, task });
  });
});

// Update To-Do status
app.put('/todos/:id', (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  db.query('UPDATE todos SET completed = ? WHERE id = ?', [completed, id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

// Delete a To-Do
app.delete('/todos/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM todos WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.sendStatus(200);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

