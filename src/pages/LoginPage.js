// LoginPage.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import axios from 'axios';


const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorSnackbar, setErrorSnackbar] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      setErrorSnackbar(true);
      return;
    }

    try {
      // Use Firebase to log in
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCredential.user;

      // Get the user's Firebase token and send it to the backend
      const token = await user.getIdToken();
      await axios.post('http://localhost:5000/api/users/login', { token });

      setOpenSnackbar(true);
      setTimeout(() => navigate('/'), 1500);
    } catch (error) {
      console.error('Login error:', error);
      setErrorSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
    setErrorSnackbar(false);
  };

  return (
    <Container maxWidth="sm" sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>
        Log In
      </Typography>
      <Box component="form" sx={styles.form}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          margin="normal"
          sx={styles.input}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          margin="normal"
          sx={styles.input}
        />
        <Button variant="contained" color="primary" onClick={handleLogin} sx={styles.button}>
          Log In
        </Button>
      </Box>

      {/* Success Snackbar */}
      <Snackbar open={openSnackbar} autoHideDuration={1500} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Login Successful! Redirecting...
        </Alert>
      </Snackbar>

      {/* Error Snackbar */}
      <Snackbar open={errorSnackbar} autoHideDuration={1500} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          Incorrect email or password. Please try again.
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

export default LoginPage;
