import React from 'react';
import ReactPlayer from 'react-player';
import { Container, Typography } from '@mui/material';

const VideoStream = ({ match }) => {
  const { id } = match.params;

  // Fetch live video URL from API for this device
  const liveStreamUrl = `https://example.com/live-stream/${id}`;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Live Stream for Device {id}
      </Typography>
      <ReactPlayer url={liveStreamUrl} playing controls width="100%" />
    </Container>
  );
};

export default VideoStream;
