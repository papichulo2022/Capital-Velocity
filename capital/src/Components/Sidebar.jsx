import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Avatar, Divider } from '@mui/material';
import { Home as HomeIcon, ShoppingCart as ShoppingCartIcon, Sell, AccountBalanceWallet, Chat } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import logo from '/capital.jpeg'

const SidebarContainer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 240,
    background: 'linear-gradient(315deg, #0d0a0b 0%, #009fc2 74%)',
    color: '#FFFFFF',
    boxShadow: '2px 0 5px rgba(0,0,0,0.5)',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#3E4B75',
  },
  color: '#FFFFFF',
}));

const Sidebar = ({ open }) => {
  return (
    <SidebarContainer variant="persistent" anchor="left" open={open}>
      <div style={{ padding: '20px', textAlign: 'center', marginTop:'50px'}} >
        <Avatar alt="User Picture" src="/path/to/user-picture.jpg" sx={{ width: 56, height: 56, margin: '10px auto' }} />
        <div style={{ color: '#FFFFFF' }}>Jhon Doe</div>
      </div>
      <Divider style={{ backgroundColor: '#FFFFFF' }} />
      <List>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <StyledListItem button>
            <ListItemIcon sx={{ color: '#FFFFFF' }}><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </StyledListItem>
        </Link>
        <Link to="/marketplace" style={{ textDecoration: 'none', color: 'inherit' }}>
          <StyledListItem button>
            <ListItemIcon sx={{ color: '#FFFFFF' }}><ShoppingCartIcon /></ListItemIcon>
            <ListItemText primary="Marketplace" />
          </StyledListItem>
        </Link>
        <Link to="/sell-your-business" style={{ textDecoration: 'none', color: 'inherit' }}>
          <StyledListItem button>
            <ListItemIcon sx={{ color: '#FFFFFF' }}><Sell /></ListItemIcon>
            <ListItemText primary="Selling" />
          </StyledListItem>
        </Link>
        <StyledListItem button>
          <ListItemIcon sx={{ color: '#FFFFFF' }}><AccountBalanceWallet /></ListItemIcon>
          <ListItemText primary="Wallet" />
        </StyledListItem>
        <StyledListItem button>
          <ListItemIcon sx={{ color: '#FFFFFF' }}><Chat /></ListItemIcon>
          <ListItemText primary="Messages" />
        </StyledListItem>
      </List>
      <Divider style={{ backgroundColor: '#FFFFFF' }} />
      <div style={{ textAlign: 'center', margin: 'auto' }}>
        <img src="/path/to/capital-velocity-logo.png" alt="Capital Velocity" style={{ width: '80%', maxWidth: '150px' }} />
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
