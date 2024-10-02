import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  IconButton,
  Divider,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const SignUp = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Full height to cover the viewport
        background: 'linear-gradient(90deg, hsla(192, 80%, 51%, 1) 0%, hsla(355, 85%, 63%, 1) 100%)',
        padding: 4,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'auto',
          padding: 4,
          backgroundColor: '#3B3B3B', // Dark background for the form
          borderRadius: 2,
          boxShadow: 3,
          width: '100%', // Full width
          maxWidth: 400, // Limit max width
          margin: '0 auto', // Center horizontally
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: '#fff' }}>
          Sign Up
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ color: '#9D9B9B' }}>
          Please enter your details to create an account!
        </Typography>
        
        <Box component="form" noValidate sx={{ mt: 3, width: '100%' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email"
            InputProps={{
              startAdornment: (
                <EmailIcon sx={{ color: '#fff', marginRight: 1 }} />
              ),
            }}
            InputLabelProps={{
              sx: { color: '#fff' }, // Label color
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'transparent', // Input background color
                color: '#fff', // Input text color
                '& fieldset': {
                  borderColor: '#fff', // Default border color
                },
                '&:hover fieldset': {
                  borderColor: '#E83E8C', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#E83E8C', // Border color when focused
                },
                transition: 'border-color 0.3s ease',
              },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            InputProps={{
              startAdornment: (
                <LockIcon sx={{ color: '#fff', marginRight: 1 }} />
              ),
            }}
            InputLabelProps={{
              sx: { color: '#fff' }, // Label color
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'transparent', // Input background color
                color: '#fff', // Input text color
                '& fieldset': {
                  borderColor: '#fff', // Default border color
                },
                '&:hover fieldset': {
                  borderColor: '#E83E8C', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#E83E8C', // Border color when focused
                },
                transition: 'border-color 0.3s ease',
              },
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            InputProps={{
              startAdornment: (
                <LockIcon sx={{ color: '#fff', marginRight: 1 }} />
              ),
            }}
            InputLabelProps={{
              sx: { color: '#fff' }, // Label color
            }}
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: 'transparent', // Input background color
                color: '#fff', // Input text color
                '& fieldset': {
                  borderColor: '#fff', // Default border color
                },
                '&:hover fieldset': {
                  borderColor: '#E83E8C', // Border color on hover
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#E83E8C', // Border color when focused
                },
                transition: 'border-color 0.3s ease',
              },
            }}
          />
          
          <Button 
            variant="contained" 
            fullWidth 
            sx={{ 
              mt: 2, 
              bgcolor: '#555', 
              fontWeight: 'bold',
              '&:hover': {
                bgcolor: '#E83E8C', // Hover background color
                transition: 'background-color 0.3s ease', // Transition effect
              },
              padding: '8px', // Reduced padding
            }}
          >
            Sign Up
          </Button>

          <Typography variant="body2" sx={{ mt: 1, textAlign: 'center', color: '#fff' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#E83E8C', textDecoration: 'underline' }}>
              Login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
