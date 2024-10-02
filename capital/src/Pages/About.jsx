import React from 'react';
import Navbar from '../Components/Navbar';
import { Box, Grid, Typography, Container, Avatar } from '@mui/material';

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Emily Johnson",
    role: "CMO",
    image: "https://via.placeholder.com/100",
  },
];

const CombinedPage = () => {
  return (
    <>
      <Navbar />
      <Grid container style={{ height: 'calc(100vh - 64px)', marginTop: '16px' }}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundImage: 'url(https://via.placeholder.com/600)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '100%',
              borderTopLeftRadius: '8px',
              borderBottomLeftRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Grid>
        {/* White Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundColor: '#f8f9fa',
              height: '100%',
              padding: 4,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              borderTopRightRadius: '8px',
              borderBottomRightRadius: '8px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Welcome to Our Service
            </Typography>
            <Typography variant="body1" paragraph>
              We provide innovative solutions tailored to your needs. Our expert team is here to assist you every step of the way.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Container sx={{ padding: 4, marginTop: 4, backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          We are a leading company in our industry, dedicated to providing high-quality products and services. Our team of experts is committed to delivering innovative solutions that meet the needs of our clients.
        </Typography>
        
        <Typography variant="h4" gutterBottom>
          Our Mission
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to empower our customers through innovative technology and unparalleled service. We strive to build long-lasting relationships with our clients based on trust, transparency, and respect.
        </Typography>
        
        <Typography variant="h4" gutterBottom>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                <Avatar alt={member.name} src={member.image} sx={{ width: 100, height: 100, mb: 2, boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }} />
                <Typography variant="h6">{member.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.role}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default CombinedPage;
