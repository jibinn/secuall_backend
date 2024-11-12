const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db'); // Ensure db is correctly imported for MySQL connection
const firebaseAdmin = require('../firebaseConfig'); 

/// Signup function
exports.signup = async (req, res) => {
  const { token, username, email } = req.body;

  // Log the incoming data
  console.log('Incoming request:', req.body);

  if (!username || !email || !token) {
    console.error('Missing required fields: username, email, or token');
    return res.status(400).json({ message: 'All fields (username, email, token) are required' });
  }

  try {
    // Decode Firebase token
    const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;

    console.log('Decoded Firebase Token:', decodedToken); // Log decoded token details

    // Check if user exists in the database
    const [existingUser] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      console.error('User already exists');
      return res.status(400).json({ message: 'User already exists' });
    }

    // Insert new user into the database
    const [result] = await db.promise().query(
      'INSERT INTO users (firebase_uid, username, email) VALUES (?, ?, ?)',
      [uid, username, email]
    );

    console.log('User inserted:', result); // Log the successful insertion

    res.status(201).json({ message: 'User registered successfully', user: { id: result.insertId, username, email } });

  } catch (err) {
    console.error('Error during signup:', err); // Log the error stack

    // Send the error message to the frontend
    res.status(500).json({ message: 'Database error', error: err.message });
  }
};


// Login function
exports.login = async (req, res) => {
  const { email, password } = req.body;

  // Check if all fields are provided
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    // Find user by email
    const [results] = await db.promise().query('SELECT * FROM users WHERE email = ?', [email]);

    if (results.length === 0) {
      return res.status(400).json({ message: 'User does not exist' });
    }

    const user = results[0];  // Assuming the email is unique

    // Compare the password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user.id, username: user.username, email: user.email },
      process.env.SECRET_KEY,  // Your secret key from .env
      { expiresIn: '1h' }  // Token expiration time
    );

    // Send the JWT token as a response
    res.status(200).json({
      message: 'Login successful',
      token
    });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};