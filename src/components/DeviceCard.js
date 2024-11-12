import React from 'react';
import { Box, Typography } from '@mui/material';
import './DeviceCard.css'; // Custom CSS for animations and styling

const DeviceCard = ({ device }) => {
  // Click handler for device card
  const handleClick = () => {
    alert(`You clicked on ${device.name}`);
    // You can replace this with navigation or other actions
  };

  return (
    <Box className="device-card" onClick={handleClick}>
      <img
        src={`/images/${device.name.toLowerCase()}.jpg`}  // Reference images using the device name
        alt={device.name}
        className="device-image"
      />
      <Typography variant="h6" className="device-name">
        {device.name}
      </Typography>
    </Box>
  );
};

export default DeviceCard;


