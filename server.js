const express = require('express');
const firebaseAdmin = require('firebase-admin');
const db = require('./db'); // Import the database connection
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Initialize Firebase Admin SDK
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  }),
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request body

// Login endpoint
app.post('/api/users/login', async (req, res) => {
  const { token } = req.body; // Get the token from the request body

  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token); // Verify the Firebase token
    const uid = decodedToken.uid;

    // Query the database for the user with this Firebase UID
    db.query('SELECT * FROM users WHERE firebase_uid = ?', [uid], (err, results) => {
      if (err) return res.status(500).json({ message: 'Database error' });

      if (results.length > 0) {
        return res.status(200).json({ message: 'Login successful' });
      }
      return res.status(400).json({ message: 'User not found' });
    });
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' }); // If token verification fails
  }
});

// Signup endpoint
app.post('/api/users/signup', async (req, res) => {
  const { token, username } = req.body; // Get the token and username from the request body

  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token); // Verify the Firebase token
    const uid = decodedToken.uid;
    const email = decodedToken.email;

    // Insert user details into the MySQL database
    db.query('INSERT INTO users (firebase_uid, username, email) VALUES (?, ?, ?)', [uid, username, email], (err) => {
      if (err) return res.status(500).json({ message: 'Database error' });

      res.status(200).json({ message: 'User registered successfully' });
    });
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' }); // If token verification fails
  }
});

// Set up server to listen on a specified port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
