import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = () => {
    console.log('Login Data: ', formData);
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
