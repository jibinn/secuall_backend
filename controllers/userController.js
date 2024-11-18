const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db'); // Ensure db is correctly imported for MySQL connection
const firebaseAdmin = require('../firebaseConfig'); 

/// Signup function
exports.signup = async (req, res) => {
  const { token, username } = req.body;

  if (!username || !token) {
    console.error('Missing required fields: username or token');
    return res.status(400).json({ message: 'All fields (username and token) are required' });
  }

  try {
    // Decode Firebase token to get UID and email
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;
    const email = decodedToken.email;

    console.log('Decoded Firebase Token:', decodedToken); // Debugging

    // Check if the user already exists in the database
    const [existingUser] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      console.error('User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    // Insert the new user into the database
    const [result] = await db.promise().query(
      'INSERT INTO users (firebase_uid, username, email) VALUES (?, ?, ?)',
      [uid, username, email]
    );

    console.log('User registered successfully:', result);
    res.status(201).json({ message: 'User registered successfully', user: { id: result.insertId, username, email } });

  } catch (err) {
    console.error('Error during signup:', err);
    res.status(500).json({ message: 'Database error', error: err.message });
  }
};


// Login function
exports.login = async (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ message: 'Token is required' });
  }

  try {
    // Decode Firebase token
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;
    const email = decodedToken.email;

    // Find user in the database
    const [results] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

    if (results.length === 0) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    const user = results[0];

    // Generate your custom JWT token if needed
    const jwtToken = jwt.sign(
      { id: user.id, email: user.email, username: user.username },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token: jwtToken,
      user: { id: user.id, email: user.email, username: user.username },
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(401).json({ message: 'Unauthorized', error: err.message });
  }
};
