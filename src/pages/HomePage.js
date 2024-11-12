import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard'; // Import the Dashboard component
import backgroundImage from '../images/aicam1.jpg'; // Adjust the image path accordingly

const HomePage = () => {
  return (
    <div>
      {/* Background Section with title, subtitle, and buttons */}
      <Box sx={styles.background}>
        <Container maxWidth="md" sx={styles.container}>
          <Typography variant="h4" sx={styles.title}>
            AI-Enabled Energy Solutions with <span style={styles.susnetText}>SusNet™</span>
          </Typography>
          <Typography variant="body1" sx={styles.subtitle}>
            Transform the way you manage energy with intelligent insights, predictive analytics,
            and AI-driven automation for smarter, greener living.
          </Typography>
          <Box sx={styles.buttons}>
            <Button
              variant="contained"
              color="primary"
              sx={styles.button}
              component={Link}
              to="/login" // Link to login page
            >
              Sign In
            </Button>
            <Button
              variant="outlined"
              sx={styles.signupButton} // Orange-styled Sign Up button
              component={Link}
              to="/signup" // Link to signup page
            >
              Sign Up
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Dashboard section directly connected to the background */}
      <Dashboard />
    </div>
  );
};

const styles = {
  background: {
    height: '70vh', // Adjust height for background image
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '0', // Remove bottom margin
    paddingBottom: '0', // Remove bottom padding
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  title: {
    marginBottom: '1rem',
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: '2.5rem',
  },
  susnetText: {
    color: 'orange',
  },
  subtitle: {
    marginBottom: '2rem',
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '1.25rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  button: {
    padding: '0.8rem 1.5rem',
  },
  signupButton: {
    padding: '0.8rem 1.5rem',
    borderColor: 'orange',
    color: 'orange',
    '&:hover': {
      backgroundColor: 'rgba(255, 165, 0, 0.1)',
    },
  },
};

export default HomePage;
