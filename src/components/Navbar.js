import React from 'react';
import { AppBar, Toolbar, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.jpg';

const Navbar = () => {
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.logoContainer}>
          {/* Wrap the logo with Link to make it clickable */}
          <Link to="/">
            <img src={logo} alt="Logo" style={styles.logo} />
          </Link>
          <Typography variant="h6" sx={styles.title}>
            {/* Add optional title text if needed */}
          </Typography>
        </Box>
        <Box sx={styles.buttonGroup}>
          <Button component={Link} to="/" sx={styles.button}>
            Home
          </Button>
          <Button component={Link} to="/login" sx={styles.button}>
            Login
          </Button>
          <Button component={Link} to="/signup" sx={styles.button}>
            Sign Up
          </Button>
          <Button component={Link} to="/dashboard" sx={styles.button}>
            Dashboard
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  appBar: {
    backgroundColor: '#fff',  // White background for the navbar
    color: '#000',            // Black text for the navbar elements
    boxShadow: 'none',        // Optionally remove shadow for a flat design
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center', // Vertically align the logo and title
  },
  logo: {
    width: '40px', // Adjust the logo size here
    height: '40px',
    marginRight: '1rem', // Add some space between the logo and the title
    cursor: 'pointer',  // Add a pointer cursor to indicate it's clickable
  },
  title: {
    color: '#000',   // Black text for the title
    fontWeight: 600,
  },
  buttonGroup: {
    display: 'flex',
  },
  button: {
    marginLeft: '1rem',
    color: '#000',  // Black text for the buttons
  },
};

export default Navbar;
