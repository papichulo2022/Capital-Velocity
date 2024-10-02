import React from 'react';
import {Container, Box, Grid, Typography, Card, CardContent, CardMedia, Button, Link } from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowRight from '@mui/icons-material/KeyboardDoubleArrowRight';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

{/* Categories Images Note Remove Later */}
import Gas from '../../public/gas.png'


const cardData = [
  {
    category: "Gas Station",
    title: "Gas Station and Car Wash",
    place: "Montana",
    price: "$2,140,000",
    img: "https://via.placeholder.com/300x200", // Placeholder image
  },
  {
    category: "Plumbing",
    title: "Gas Station and Car Wash",
    place: "Florida",
    price: "870,000",
    img: "https://via.placeholder.com/300x200", // Placeholder image
  },
  {
    category: "Coffee",
    title: "Coffee and Restaurant",
    place: "Las Vegas",
    price: "$946,500",
    img: "https://via.placeholder.com/300x200", // Placeholder image
  },
  {
    category: "Restaurant",
    title: "Elegant Restaurant",
    place: "New York",
    price: "$1,230,000",
    img: "https://via.placeholder.com/300x200", // Placeholder image
  },
  {
    category: "Laundry",
    title: "Coin Laundry",
    place: "Kansas",
    price: "$970,000",
    img: "https://via.placeholder.com/300x200", // Placeholder image
  },
  {
    category: "Technology",
    title: "Internet and IT",
    place: "Georgia",
    price: "$2,870,000",
    img: "https://via.placeholder.com/300x200", // Placeholder image
  },
  {
    category: "Motels",
    title: "Motels and Restaurant",
    place: "Arizona",
    price: "$2,450,000",
    img: "https://via.placeholder.com/300x200", // Placeholder image
  },
  {
    category: "Food Bussiness",
    title: "Thailand",
    place: "Ohio",
    price: "$1,740,000",
    img: "https://via.placeholder.com/300x200", // Placeholder image
  },
  // Add more cards as necessary...
];

const BusinessCategories = () => {
  return (
    <Container maxWidth='xl' sx={{ backgroundColor: '#F8F9FA', p: 1, mt:1 }} >
    <Box sx={{ mt: 5 ,mx: 7}}>
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
        }}
      >
        <Box>
          {/* Subtitle */}
          <Typography sx={{ color: '#E83E8C', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 2}}>
            Hurry up these are expiring soon.
          </Typography>
          {/* Title */}
          <Typography variant="h4" sx={{ fontWeight: 'bold', mt: 1 }}>
            Popular Business Categories
          </Typography>
        </Box>

        {/* See All Deals Link */}
        <Box
            sx={{
              display: { xs: 'none',sm: 'flex' }, // Show on larger screens only
              justifyContent: 'flex-end',
              alignItems: 'center',
              mt: 2,
              }}
          >
            <Link href="/marketplace" underline="none"
              sx={{
                fontSize: '14px',
                color: '#212529',
                display: 'flex',
                alignItems: 'center',
                transition: 'color 0.3s ease',
                '&:hover': {
                  color: '#4E66F8', // Change color on hover
                }
              }}
            >
              See All Locations
              <DoubleArrowIcon
                sx={{
                  fontSize: '14px',
                  ml: 0.5,
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateX(2px)', // Move the arrow on hover
                  },
                }}
              />
            </Link>
          </Box>
      </Box>

      {/* Grid Section for Cards */}
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ borderRadius: '8px', position: 'relative' }} elevation={3}>
              {/* Card Image with Title inside (left-bottom) */}
              <CardMedia
                component="img"
                alt={card.title}
                height="200"
                image={Gas}                  
                sx={{
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.1)', // Zoom in on hover
                  },
                }}
              />
              {/* Title Inside Image - Positioned bottom-left */}
              <Box sx={{ position: 'absolute', bottom:'150px', left:'0px' }} >
              <Typography
                sx={{
                  fontSize: '16px',
                  color: '#fff',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: add a background for better visibility
                  textOverflow: 'ellipsis', 
                }}
              >
                {card.category}
              </Typography>
              </Box>
              {/* Card Details */}
              <CardContent sx={{ textAlign: 'left', pt: 0 }}>
                {/* Title */}
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', pt: 2}}>
                  {card.title}
                </Typography>
                {/* Place */}
                <Typography sx={{ fontSize:'14px', pt: 1}}>
                  {card.place}
                </Typography>
                
              {/*-----======= Flex Container for Price and More Details ======-----*/} 
              <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2}}> 
                  {/* Price */}
                  <Typography variant="subtitle2" sx={{ fontSize: '24px',fontWeight: 'bold', color: '#4E66F8' }}>
                    {card.price}
                  </Typography>
                  {/* More Details */}
                  <Box sx={{ display: 'flex', alignItems: 'center', color: '#808080' }}>
                      <Typography variant="caption" sx={{ mt: 1, display: 'flex', alignItems: 'center' }}>
                        More details
                        <KeyboardDoubleArrowRightIcon sx={{ fontSize: '20px' }} />
                      </Typography>
                    </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default BusinessCategories;
