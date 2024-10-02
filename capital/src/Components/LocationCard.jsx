import React from 'react';
import { Card, CardMedia, Typography, Box, Link } from '@mui/material';

const LocationCard = ({ imageUrl, stateName }) => {
  // Create a URL that includes the state as a query parameter
  const link = `/marketplace?state=${encodeURIComponent(stateName)}`;

  return (
    <Link href={link} underline="none">
      <Card 
        sx={{ 
          width: '200px',
          height: '300px',
          position: 'relative', 
          borderRadius: '8px', 
          overflow: 'hidden', 
          cursor: 'pointer',
          mt: 4, 
          transition: 'transform 0.3s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          }
        }}>
        <CardMedia
          component="img"
          alt={stateName}
          height="100%"
          image={imageUrl}
          sx={{ objectFit: 'cover', width: '100%' }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '15px',
            left: '10px',
            bgcolor: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            padding: '4px 10px',
            borderRadius: '4px',
            textTransform: 'uppercase',
            fontFamily: 'Poppins, Arial, sans-serif',
            fontWeight: '200',
            fontSize: '16px',
          }}
        >
          <Typography variant="body2" fontWeight="bold">
            {stateName}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default LocationCard;
