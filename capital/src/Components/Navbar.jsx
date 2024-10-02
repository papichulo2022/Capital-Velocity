// src/Components/AppAppBar.jsx
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import StoreIcon from '@mui/icons-material/Store';
import SellIcon from '@mui/icons-material/Sell';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  backdropFilter: 'blur(24px)',
  padding: '15px 19px',
}));

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);
  const [visible, setVisible] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setVisible(scrollY === 0); // Show navbar only when at the top
    setLastScrollY(scrollY);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <AppBar
      position="fixed"
      sx={{
        transition: 'transform 0.3s ease',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        bgcolor: 'transparent',
        boxShadow: 0,
      }}
    >
      <Container maxWidth="xl">
        <StyledToolbar variant="dense" disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Button sx={{ mx: 5 }}>Logo</Button>
            <Box sx={{ display: { xs: 'none', md: 'flex', gap: 5 } }}>
              <Button component={Link} to="/marketplace" variant="text" size="small" sx={{ textTransform: 'capitalize', color: '#FFFFFF' }}>
                <StoreIcon sx={{ mr: 1, fontSize: '19px' }} /> Marketplace
              </Button>
              <Button component={Link} to="/sell-your-business" variant="text" size="small" sx={{ textTransform: 'capitalize', color: '#FFFFFF' }}>
                <SellIcon sx={{ mr: 1, fontSize: '17px' }} /> Sell Your Business
              </Button>
              <Button component={Link} to="/about" variant="text" size="small" sx={{ textTransform: 'capitalize', color: '#FFFFFF' }}>
                About Us
              </Button>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
            <Button component={Link} to="/login" color="inherit" variant="text" size="small">Sign in</Button>
            <Button component={Link} to="/signup" color="inherit" variant="text" size="small">Sign up</Button>
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem component={Link} to="/marketplace">Marketplace</MenuItem>
                <MenuItem component={Link} to="/sell-your-business">Sell Your Business</MenuItem>
                <MenuItem component={Link} to="/about">About</MenuItem>
                <MenuItem>
                  <Button component={Link} to="/login" color="primary" variant="contained">Sign up</Button>
                </MenuItem>
                <MenuItem>
                  <Button component={Link} to="/signup" color="primary" variant="outlined" fullWidth>Sign in</Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
