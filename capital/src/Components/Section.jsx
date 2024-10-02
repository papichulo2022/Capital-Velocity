import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import Demo from '../../public/demo.png'


const Section = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#151515',
        padding: '50px',
        position: 'relative',
        mt: 6
      }}
    >
      <Typography 
        variant="h5" 
        component="h2" 
        sx={{ 
            color: 'white', 
            marginBottom: '16px',
            marginTop: 3,
            textAlign:'center',
            fontSize: '50px',
            fontWeight: '300',
            fontFamily: 'Nunito Sans, Arial, sans-serif', // Apply font here
        }}
      >
        Start <strong>Buying & Selling</strong> <br /> efficiently in Minutes
      </Typography>
      <Box
        component="img"
        src={Demo} // replace with your image path
        alt="Background"
        sx={{
          width: '1140px',
          height: '400px',
          objectFit: 'cover',
          marginTop: 2,
          marginBottom: 10,
        }}
      />
    </Box>
  );
};

export default Section;
