import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={styles.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Contact Information */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={styles.sectionTitle}>
              Contact Us
            </Typography>
            <Typography sx={styles.text}>
              HITOAI Limited <br />
              Sandyford, Dublin 18 <br />
              Dublin, Ireland
            </Typography>
            <Typography sx={styles.text}>+353 89 983 2147</Typography>
          </Grid>

          {/* Queries */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={styles.sectionTitle}>
              Queries
            </Typography>
            <Typography sx={styles.text}>
              Product Related Queries <br />
              <Link href="mailto:products@hitoai.ai" sx={styles.link}>
                products@hitoai.ai
              </Link>
            </Typography>
            <Typography sx={styles.text}>
              Service Related Queries <br />
              <Link href="mailto:services@hitoai.ai" sx={styles.link}>
                services@hitoai.ai
              </Link>
            </Typography>
            <Typography sx={styles.text}>
              General Inquiries <br />
              <Link href="mailto:info@hitoai.com" sx={styles.link}>
                info@hitoai.com
              </Link>
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={styles.sectionTitle}>
              Quick Links
            </Typography>
            <Box sx={styles.links}>
              <Link href="/" sx={styles.quickLink}>
                Home
              </Link>
              <Link href="/about" sx={styles.quickLink}>
                About
              </Link>
              <Link href="/updates" sx={styles.quickLink}>
                Updates
              </Link>
              <Link href="/contact" sx={styles.quickLink}>
                Contact
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={styles.copyright}>
          <Typography sx={styles.text}>&copy; 2024 HitoAI - All Rights Reserved.</Typography>
          <Typography sx={styles.text}>
            &copy; INTELLECTUAL PROPERTY RIGHTS: All The Videos, Demos, Drawings, Graphics And Text Are The Works Of HitoAI
            Limited And Are Protected By Copyright. No Part Of These Works May Be Reproduced Without Permission.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

const styles = {
  footer: {
    backgroundColor: '#081944',
    color: '#ffffff',
    padding: '2rem 0',
    marginTop: '2rem',
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  text: {
    color: '#ffffff',
    fontSize: '0.9rem',
    lineHeight: '1.6',
    marginBottom: '0.5rem',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  links: {
    display: 'flex',
    flexDirection: 'column',
  },
  quickLink: {
    color: '#ffffff',
    fontSize: '0.9rem',
    textDecoration: 'none',
    marginBottom: '0.5rem',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  copyright: {
    marginTop: '2rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
    paddingTop: '1rem',
    textAlign: 'center',
  },
};

export default Footer;
