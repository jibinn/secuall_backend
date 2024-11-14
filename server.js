const express = require('express');
const firebaseAdmin = require('firebase-admin');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

// Initialize Firebase Admin SDK
try {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
  });
  console.log('Firebase initialized successfully');
} catch (error) {
  console.error('Firebase initialization error:', error);
}

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request body

// Login endpoint
app.post('/api/users/login', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;

    // Respond with a success message and user ID for frontend reference
    return res.status(200).json({
      message: 'Login successful',
      user: { uid },
    });
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// Signup endpoint
app.post('/api/users/signup', async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;
    const email = decodedToken.email || null;

    // Respond with a success message and user details
    return res.status(201).json({
      message: 'User registered successfully',
      user: { uid, email },
    });
  } catch (error) {
    console.error('Token verification error:', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
});

// Set up server to listen on a specified port
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
