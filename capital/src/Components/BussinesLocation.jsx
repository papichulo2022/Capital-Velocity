import React from 'react';
import { Container, Box, Typography, Link, Grid } from '@mui/material';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import LocationCard from './LocationCard';

export default function BussinesLocation() {
  const states = [
    { name: "New York", imageUrl: "https://images.unsplash.com/photo-1448317971280-6c74e016e49c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG5ldyUyMHlvcmt8ZW58MHwxfDB8fHww", link: "/california" },
    { name: "New Jersey", imageUrl: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmV3JTIwamVyc2V5JTIwY2l0eXxlbnwwfDF8MHx8fDA%3D", link: "/texas" },
    { name: "Los Angeles", imageUrl: "https://images.unsplash.com/photo-1544413660-299165566b1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9zJTIwYW5nZWxlcyUyMGNpdHl8ZW58MHwxfDB8fHww", link: "/texas" },
    { name: "Houston", imageUrl: "https://images.unsplash.com/photo-1716126601393-02ebde72b81a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHRleGFzJTIwY2l0eXxlbnwwfDF8MHx8fDA%3D", link: "/texas" },
    { name: "Miami", imageUrl: "https://images.unsplash.com/photo-1541945876617-8026869043f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWlhbWklMjBjaXR5fGVufDB8MXwwfHx8MA%3D%3D", link: "/texas" },
  ];

  return (
    <Container maxWidth='xl' sx={{ backgroundColor: '#fff', p: 1, my: 5 }}>
      <Box sx={{ mt: 3, mx: 7, }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Typography
              sx={{
                color: '#4E66F8',
                textTransform: 'uppercase',
                letterSpacing: 3,
                fontSize: '15px',
                fontWeight: 'bold',
              }}
            >
              View More Popular locations
            </Typography>
            <Typography
              sx={{
                color: '#212529',
                fontSize: '32px',
                fontWeight: 'bold',
                mt: 1,
              }}
            >
              Popular Business Location
            </Typography>
          </Box>
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

        {/* Popular Business Location Component */}
        <Grid container spacing={2} >
          {states.map((state, index) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={index} display="flex" justifyContent='center'>
              <LocationCard
                imageUrl={state.imageUrl}
                stateName={state.name}
                link={state.link}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
