import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import DeviceList from '../components/DeviceList';

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>
        Device Dashboard
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
  },
  title: {
    marginBottom: '2rem',
    fontWeight: 600,
    color: '#3f51b5',
  },
  deviceList: {
    marginTop: '1rem',
  },
};

export default Dashboard;
