import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = () => {
    // Send signup request to API (use axios)
    console.log('Sign Up Data: ', formData);
  };

  return (
    <Container maxWidth="sm" sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>
        Sign Up
      </Typography>
      <Box component="form" sx={styles.form}>
        <TextField
          fullWidth
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          margin="normal"
          sx={styles.input}
        />
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
        <Button variant="contained" color="primary" onClick={handleSignUp} sx={styles.button}>
          Sign Up
        </Button>
      </Box>
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
