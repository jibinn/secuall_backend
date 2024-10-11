import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const DeviceCard = ({ device }) => {
  return (
    <Card sx={styles.card}>
      <CardContent>
        <Typography variant="h5" sx={styles.deviceName}>
          {device.name}
        </Typography>
        <Box sx={styles.buttons}>
          <Button variant="contained" color="primary" sx={styles.button}>
            View Live
          </Button>
          <Button variant="outlined" color="secondary" sx={styles.button}>
            View Alerts
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const styles = {
  card: {
    padding: '1rem',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  deviceName: {
    marginBottom: '1rem',
    fontWeight: 500,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    padding: '0.5rem 1rem',
  },
};

export default DeviceCard;
