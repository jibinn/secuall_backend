const mysql = require('mysql2');
require('dotenv').config(); // Load environment variables

// MySQL connection setup
const db = mysql.createConnection({
  host: process.env.DB_HOST,       // Database host
  user: process.env.DB_USER,       // Database username
  password: process.env.DB_PASS,   // Database password
  database: process.env.DB_NAME    // Database name
});

// Connect to the MySQL Database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err.code, err.sqlMessage, err.sqlState);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = db;
