import React from 'react';
import { Container, Typography, List, ListItem, Box } from '@mui/material';

const AnomalyAlerts = () => {
  const anomalies = [
    { id: 1, timestamp: '2024-01-01 10:00:00', imageUrl: 'url-to-image1.jpg' },
    { id: 2, timestamp: '2024-01-02 11:30:00', imageUrl: 'url-to-image2.jpg' },
  ];

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>
        Anomaly Alerts
      </Typography>
      <List sx={styles.list}>
        {anomalies.map((anomaly) => (
          <ListItem key={anomaly.id} sx={styles.listItem}>
            <Box sx={styles.anomalyContent}>
              <img src={anomaly.imageUrl} alt={`Anomaly detected at ${anomaly.timestamp}`} width="200" />
              <Typography>{anomaly.timestamp}</Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
  title: {
    marginBottom: '2rem',
    fontWeight: 600,
    color: '#3f51b5',
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
  listItem: {
    marginBottom: '1rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '1rem',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  anomalyContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

export default AnomalyAlerts;
