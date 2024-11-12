import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import Firebase Auth
import axios from 'axios';

const SignUpPage = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = async () => {
    if (!formData.username || !formData.email || !formData.password) {
      setErrorSnackbar(true);
      return;
    }
  
    try {
      // Create a user with Firebase
      const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;
  
      // Get the Firebase token
      const token = await user.getIdToken();
  
      console.log('Sending request with token:', token); // Debugging token
  
      // Send token to the backend
      const response = await axios.post('http://localhost:5000/api/users/signup', {
        token,
        username: formData.username,
        email: formData.email,
      });
  
      console.log('Response from backend:', response.data); // Log the response from backend
  
      setOpenSnackbar(true);
      setTimeout(() => navigate('/login'), 1500);
  
    } catch (error) {
      console.error('Sign Up error:', error); // Log the error
      
      if (error.response) {
        // More detailed error response logging
        console.error('Error response data:', error.response.data);
        console.error('Error status:', error.response.status);
        console.error('Error headers:', error.response.headers);
      }
  
      setErrorSnackbar(true);
    }
  };
  

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setErrorSnackbar(false);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Sign Up</Typography>
      <Box component="form">
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          margin="normal"
        />
        <Button variant="contained" color="primary" onClick={handleSignUp}>Sign Up</Button>
      </Box>

      {/* Success Snackbar */}
      <Snackbar open={openSnackbar} autoHideDuration={1500} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Sign Up Successful! Redirecting to Login...
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar open={errorSnackbar} autoHideDuration={1500} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          Sign Up Failed. Please try again.
        </Alert>
      </Snackbar>
    </Container>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    marginTop: '2rem',
  },
  title: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontWeight: 600,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '1.5rem',
  },
  button: {
    marginTop: '1.5rem',
    padding: '0.8rem',
  },
};

export default SignUpPage;
