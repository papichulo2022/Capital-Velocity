// src/Components/BusinessDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import businesses from '../bussinesData';
import { Typography, Box } from '@mui/material';

const BusinessDetail = () => {
  const { id } = useParams();
  const business = businesses.find(b => b.id === parseInt(id)); 

  if (!business) {
    return <Typography variant="h6">Business not found</Typography>;
  }

  return (
    <Box padding={2}>
      <Typography variant="h4">{business.name}</Typography>
      <Typography variant="h6">Category: {business.category}</Typography>
      <Typography variant="body1">State: {business.state}</Typography>
      <Typography variant="body1">Price: ${business.price}</Typography>
      <Typography variant="body1">{business.description}</Typography>
      {/* Add more details  */}
    </Box>
  );
};

export default BusinessDetail;
