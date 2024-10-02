import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar'; // Ensure the path is correct

const MainLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: 250 }}>
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
