const db = require('../db');  // Assuming your database connection is in /db/index.js
const bcrypt = require('bcryptjs');

module.exports = {
  // Function to create a new user in the database
  async createUser(username, email, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
        [username, email, hashedPassword],
        function (error) {
          if (error) {
            console.error('Error inserting user into DB:', error);
            return reject(error);
          }
          resolve({ id: this.lastID, username, email });
        }
      );
    });
  },

  // Function to find a user by their email
  findUserByEmail(email) {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM users WHERE email = ?`, [email], (error, user) => {
        if (error) {
          console.error('Error fetching user by email:', error);
          return reject(error);
        }
        resolve(user);
      });
    });
  }
};
