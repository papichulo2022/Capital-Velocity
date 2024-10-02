import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Link, TextField, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

// Styled Card Component
const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  maxWidth: '1125px',
  height: 'auto',
  transition: 'transform 0.2s, box-shadow 0.2s',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: '#F8F9FA',
  position: 'relative',
  margin: '0 auto',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 4px 30px rgba(0,0,0,0.2)',
  },
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
}));

// Styled Card Media
const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: '296px',
  height: '197px',
  objectFit: 'cover',
  position: 'relative',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    height: '150px', // Reduce size in sm
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    height: '200px', // Reduce size in sm
  },
  [theme.breakpoints.down('xs')]: {
    width: '100%',
    height: 'auto', // Maintain auto size in xs
  },
}));

const BusinessCard = ({ business }) => {
  return (
    <StyledCard>
      <StyledCardMedia
        component="img"
        image={business.image}
        alt={business.id}
      />
      <Box position="absolute" bottom={10} left={10} bgcolor="rgba(255, 255, 255, 0.7)" padding="5px" borderRadius="5px">
        <Typography variant="caption" color="text.secondary" style={{ fontWeight: 'bold' }} sx={{display: {xs:'none', md:'block'} }}>
          {business.category}
        </Typography>
      </Box>

      <CardContent sx={{ flex: 1, display: 'flex', padding: { xs: '10px', sm: '15px', md: '10px' }, flexDirection: 'row' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', marginLeft: { sm: '10px', md: '16px' } }}>
          <Typography sx={{ marginTop: 0, mb: 1, color: '#212529', fontWeight: 'semibold', fontSize: { xs: '16px', sm: '18px', md: '18px' } }}>
            {business.state}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, color: '#212529', fontSize: { xs: '12px', sm: '14px' }, fontFamily: 'Open Sans', gap: 1, mb: 1 }}>
            <Box>
              <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, color: '#E83E8C' }}>Monthly Net Profit:</Typography>
              <Typography sx={{ mt: 0.5, color: '#212529', fontSize: { xs: '12px', sm: '14px' } }}>{business.monthlyNetProfit}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, color: '#E83E8C' }}>Monthly Revenue:</Typography>
              <Typography sx={{ mt: 0.5, color: '#212529', fontSize: { xs: '12px', sm: '14px' } }}>{business.revenue}</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, color: '#E83E8C' }}>Business Created:</Typography>
              <Typography sx={{ mt: 0.5, color: '#212529', fontSize: { xs: '12px', sm: '14px' } }}>{business.created}</Typography>
            </Box>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ marginTop: '8px', display: {xs:'none', md:'block'} }}  >
            {business.description}
          </Typography>
        </Box>

        <Box sx={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: { xs: '16px', md: '0' } }}>
          <Typography color="#323240" fontWeight="bold" fontSize={{ xs: '14px', sm: '15px', md: '15px' }} sx={{ marginRight: '15px', minHeight: '80px', textAlign: 'center' }}>
            {business.name}
          </Typography>
          <Typography color="#4E66F8" fontWeight="bold" fontSize={{ xs: '20px', sm: '22px', md: '24px' }} sx={{ marginTop: '8px', minHeight: '30px' }}>
            ${business.price}
          </Typography>
          <Link href="#" underline="none"
            sx={{
              fontSize: '14px',
              color: '#212529',
              display: 'flex',
              alignItems: 'center',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#4E66F8',
              }
            }}
          >
            See All Details
            <DoubleArrowIcon
              sx={{
                fontSize: '14px',
                ml: 0.5,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateX(2px)',
                },
              }}
            />
          </Link>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

// Search and Filter Component
const SearchAndFilter = ({ categories, onSearch, onFilter }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
      <TextField
        label="Search"
        variant="outlined"
        onChange={onSearch}
        sx={{ mb: 2, width: '100%', maxWidth: '400px' }} // Adjust width as needed
      />
      <TextField
        select
        label="Filter Category"
        onChange={onFilter}
        variant="outlined"
        sx={{ width: '100%', maxWidth: '400px' }} // Adjust width as needed
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};

export default BusinessCard;
export { SearchAndFilter };
