import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import DeviceList from '../components/DeviceList';

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>
        Sunset Products - Optimized performance with our subscription plan
      </Typography>
      <Box sx={styles.deviceList}>
        <DeviceList />
      </Box>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: '2rem',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.8rem',
    fontWeight: 600,
    marginBottom: '2rem',
    color: '#333',
  },
  deviceList: {
    marginTop: '2rem',
  },
};

export default Dashboard;

