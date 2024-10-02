import React from 'react';
import { Container, Grid, Typography, TextField, InputAdornment, Box } from '@mui/material';
import { Facebook, X, Instagram, LinkedIn, Send } from '@mui/icons-material'; // Added Send icon

import About from '../Pages/About'

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#FFFFFF', mt:2 , pt: 9 }}>
      <Container maxWidth="lg" sx={{mx: 7}}>
        <Grid container spacing={6}>
          {/* -----------============ Social Media Links ===========------------ */}
          <Grid item xs={12} sm={3}>
            <Typography sx={{textTransform:"uppercase", fontSize:'16px', fontWeight:'bold', letterSpacing: 2}}>Capital Velocity</Typography>
            <Typography variant="body2" sx={{ marginTop: '16px' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            
            <Box sx={{ display: 'flex', marginTop: '16px', '& svg':{color:'#212529', fontSize:'16px'}}}>
            <a href="https://www.facebook.com" target="_blank" rel="nooper noreferrer">
                <Facebook />
            </a>
            <a href="https://x.com" target="_blank" rel="nooper noreferrer">
                <X sx={{ marginLeft: '10px', color:'#212529'}} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="nooper noreferrer">
                <Instagram sx={{ marginLeft: '10px' }} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="nooper noreferrer">
                <LinkedIn sx={{ marginLeft: '10px' }} />
            </a>
            </Box>
          </Grid>

         {/* -----------============== Site Links =============------------ */}     
          <Grid item xs={12} sm={2}>
            <Typography sx={{textTransform:"uppercase", fontSize:'16px', fontWeight:'bold', letterSpacing: 1, color:'#343A40'}}>
                Site Links
            </Typography>

            <Box href="/marketplace" sx={{ display: 'block', mt: 1, position: 'relative', textDecoration: 'none', color: '#212529' }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  display: 'inline-block', 
                  position: 'relative',
                  cursor: 'pointer',
                  '&:hover::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#007bff',
                    transition: 'width 0.3s ease',
                    width: '100%',
                  }
                }}>
                Marketplace
              </Typography>
            </Box>

            <Box sx={{ position: 'relative', mt: 1}}>
              <Typography 
                variant="body2" 
                sx={{
                  display: 'inline-block', 
                  position: 'relative',
                  cursor: 'pointer',
                  '&:hover::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#007bff',
                    transition: 'width 0.3s ease',
                    width: '100%',
                  }
                }}>
                Sell Your Bussiness
                </Typography>
            </Box>
            
            <Box sx={{ position: 'relative', mt: 1}}>
              <Typography 
                variant="body2" 
                sx={{
                  display: 'inline-block', 
                  position: 'relative',
                  cursor: 'pointer',
                  '&:hover::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#007bff',
                    transition: 'width 0.3s ease',
                    width: '100%',
                  }
                }}>
                  About Us
                </Typography>
            </Box>

            <Box sx={{ position: 'relative', mt: 1}}>
              <Typography 
                variant="body2" 
                sx={{
                  display: 'inline-block', 
                  position: 'relative',
                  cursor: 'pointer',
                  '&:hover::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#007bff',
                    transition: 'width 0.3s ease',
                    width: '100%',
                  }
                }}>
                  Podcast
                </Typography>
            </Box>
          </Grid>

          {/* Third Column */}
          <Grid item xs={12} sm={2}>
          <Box sx={{ position: 'relative', mt: 1}}>
              <Typography 
                variant="body2" 
                sx={{
                  display: 'inline-block', 
                  position: 'relative',
                  cursor: 'pointer',
                  '&:hover::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#007bff',
                    transition: 'width 0.3s ease',
                    width: '100%',
                  }
                }}>
                  Contact Us
                </Typography>
            </Box>
            <Box sx={{ position: 'relative', mt: 1}}>
              <Typography 
                variant="body2" 
                sx={{
                  display: 'inline-block', 
                  position: 'relative',
                  cursor: 'pointer',
                  '&:hover::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#007bff',
                    transition: 'width 0.3s ease',
                    width: '100%',
                  }
                }}>
                  Testimonials
                </Typography>
            </Box>
            <Box sx={{ position: 'relative', mt: 1}}>
              <Typography 
                variant="body2" 
                sx={{
                  display: 'inline-block', 
                  position: 'relative',
                  cursor: 'pointer',
                  '&:hover::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#007bff',
                    transition: 'width 0.3s ease',
                    width: '100%',
                  }
                }}>
                  Careers
                </Typography>
            </Box>
            <Box sx={{ position: 'relative', mt: 1}}>
              <Typography 
                variant="body2" 
                sx={{
                  display: 'inline-block', 
                  position: 'relative',
                  cursor: 'pointer',
                  '&:hover::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#007bff',
                    transition: 'width 0.3s ease',
                    width: '100%',
                  }
                }}>
                  Scoreboard
                </Typography>
            </Box>
            <Box sx={{ position: 'relative', mt: 1}}>
              <Typography 
                variant="body2" 
                sx={{
                  display: 'inline-block', 
                  position: 'relative',
                  cursor: 'pointer',
                  '&:hover::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -2,
                    left: 0,
                    right: 0,
                    height: '2px',
                    backgroundColor: '#007bff',
                    transition: 'width 0.3s ease',
                    width: '100%',
                  }
                }}>
                  Referral Program
                </Typography>
            </Box>
          </Grid>

          {/* Fourth Column */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" 
                sx={{
                    whiteSpace: 'nowrap', 
                    color:'#343A40', 
                    fontWeight:'bold', 
                    fontSize: '16px',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                }}>
                Want to Get the Latest Industry News?
            </Typography>
            <Typography variant="body2" sx={{ marginTop: '16px' , color:'#212529'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Send style={{ cursor: 'pointer' }} />
                  </InputAdornment>
                ),
              }}
              sx={{ marginTop: '16px', width: '100%' }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Bottom Black Container */}
      <Box sx={{ backgroundColor: '#000', color: '#fff', padding: '20px 0', marginTop: 9}}>
        <Container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2">© 2021 Your Company. All Rights Reserved.</Typography>
          <Box sx={{ display: 'flex', gap: '10px' }}>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
