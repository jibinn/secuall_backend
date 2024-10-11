import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container maxWidth="md" sx={styles.container}>
      <Box sx={styles.content}>
        <Typography variant="h4" sx={styles.title}>
          Welcome to MyApp
        </Typography>
        <Typography variant="h6" sx={styles.subtitle}>
          An awesome platform for managing your devices.
        </Typography>
        <Box sx={styles.buttons}>
          <Button variant="contained" color="primary" component={Link} to="/login" sx={styles.button}>
            Login
          </Button>
          <Button variant="outlined" color="primary" component={Link} to="/signup" sx={styles.button}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: '4rem',
    textAlign: 'center',
  },
  content: {
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '1.5rem',
    fontWeight: 600,
    color: '#3f51b5',
  },
  subtitle: {
    marginBottom: '2rem',
    color: '#757575',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  button: {
    padding: '0.8rem 1.5rem',
  },
};

export default HomePage;
