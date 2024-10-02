import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import { Grid, IconButton, TextField, MenuItem, Select, FormControl, InputLabel, Box, Pagination } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BusinessCard from '../Components/BussinesCard';
import businesses from '../bussinesData';

const Marketplace = () => {
  const [open, setOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const location = useLocation();

  const toggleSidebar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const state = params.get('state');
    if (state) {
      setSearchTerm(state);
    }
  }, [location.search]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const filteredBusinesses = businesses
    .filter(business => 
      business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      business.state.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(business => 
      selectedCategory ? business.category === selectedCategory : true
    )
    .sort((a, b) => {
      if (sortOption === 'price') {
        return a.price - b.price;
      } else {
        return a.name.localeCompare(b.name);
      }
    });

  const indexOfLastBusiness = currentPage * itemsPerPage;
  const indexOfFirstBusiness = indexOfLastBusiness - itemsPerPage;
  const currentBusinesses = filteredBusinesses.slice(indexOfFirstBusiness, indexOfLastBusiness);
  
  const totalPages = Math.ceil(filteredBusinesses.length / itemsPerPage);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar open={open} />
      <div style={{ flexGrow: 1, padding: '20px', marginLeft: open ? '240px' : '60px', transition: 'margin-left 0.3s' }}>
        <IconButton onClick={toggleSidebar} style={{ marginBottom: '20px' }}>
          <MenuIcon />
        </IconButton>
        
        <Box 
          display="flex" 
          flexDirection={{ xs: 'column', md: 'row', gap: "19px" }} 
          alignItems="flex-start" 
          ml={2} 
          mb={6}
          mt={4}
        >
          <TextField
            label="Search by Business Name or State"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ 
              marginBottom: { xs: 2, md: 0 }, 
              marginRight: { md: 2 },
              width: { xs: '100%', md: '400px' },
              borderRadius: '8px' 
            }}
          />
          <FormControl 
            sx={{ 
              minWidth: { xs: '100%', md: 200 },
              marginBottom: { xs: 2, md: 0 },
              marginRight: { md: 2 } 
            }}
          >
            <InputLabel>Filter by Category</InputLabel>
            <Select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              sx={{ borderRadius: '8px' }}
            >
              <MenuItem value="">All</MenuItem>
              {Array.from(new Set(businesses.map(b => b.category))).map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl 
            sx={{ 
              minWidth: { xs: '100%', md: 200 }
            }}
          >
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              sx={{ borderRadius: '8px' }}
            >
              <MenuItem value="name">Business Name</MenuItem>
              <MenuItem value="price">Price</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={3}>
          {currentBusinesses.map((business) => (
            <Grid item xs={12} key={business.id}>
              <BusinessCard business={business} />
            </Grid>
          ))}
        </Grid>

        <Box display="flex" justifyContent="center" mt={4}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(event, value) => setCurrentPage(value)}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </Box>
      </div>
    </div>
  );
};

export default Marketplace;
