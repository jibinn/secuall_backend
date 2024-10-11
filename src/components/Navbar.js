import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar>
        <Typography
          component={Link} // Make the title a clickable Link
          to="/" // Redirect to home page on click
          variant="h6"
          sx={styles.title}
        >
          Device Monitoring App
        </Typography>
        <Button color="inherit" component={Link} to="/" sx={styles.button}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/login" sx={styles.button}>
          Login
        </Button>
        <Button color="inherit" component={Link} to="/signup" sx={styles.button}>
          Sign Up
        </Button>
        <Button color="inherit" component={Link} to="/dashboard" sx={styles.button}>
          Dashboard
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  appBar: {
    backgroundColor: '#3f51b5',  // Primary color
  },
  title: {
    flexGrow: 1,  // This pushes the buttons to the right
    textDecoration: 'none',  // Remove underline from the link
    color: 'inherit',  // Use the default text color
  },
  button: {
    marginLeft: '1rem',
  },
};

export default Navbar;
