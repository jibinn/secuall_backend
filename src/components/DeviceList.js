import React from 'react';
import { Grid } from '@mui/material';
import DeviceCard from './DeviceCard';

const devices = [
  { id: 1, name: 'DashCam' },
  { id: 2, name: 'HomeCam' },
  { id: 3, name: 'CarCam' },
];

const DeviceList = () => {
  return (
    <Grid container spacing={3}>
      {devices.map((device) => (
        <Grid item xs={12} md={4} key={device.id}>
          <DeviceCard device={device} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DeviceList;
