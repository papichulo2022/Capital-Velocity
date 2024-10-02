import React, { useEffect, useState } from 'react';
import { Box, TextField, Autocomplete, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const categories = [
    'Restaurants & Food',
    'Service Business', 
    'Retail',
    'Building & Construction',
    'Online & Technology',
    'Transportation & Storage',
    'Financial Services',
    'Automotive & Boat' 
];

const InputSearch = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const navigate = useNavigate();

  const handleScroll = () => {
    const newScrollY = window.scrollY;

    if (newScrollY > lastScrollY && isVisible) {
      setIsVisible(false);
    } else if (newScrollY < lastScrollY && !isVisible) {
      setIsVisible(true);
    }

    setLastScrollY(newScrollY);
  };

  const handleSearch = () => {
    navigate(`/marketplace?state=${encodeURIComponent(searchTerm)}&category=${encodeURIComponent(selectedCategory)}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isVisible]);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        mt: 4,
        gap: 2,
        mx: 'auto',
        width: '100%',
        background: '#fff',
        borderRadius: '30px',
        padding: '0px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(-20px)',
        transition: 'opacity 0.3s ease, transform 0.5s ease',
      }}
    >
      <TextField
        variant="outlined"
        placeholder="What are you searching for?"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        sx={{
          pl: 2,
          width: { xs: '100%', md: '70%' },
          '& .MuiOutlinedInput-root': {
            borderRadius: '8px',
            border: 'none',
            '& fieldset': {
              border: 'none',
            },
          },
        }}
        InputProps={{
          sx: { color: '#212529', backgroundColor: '#fff' },
        }}
      />

      <Autocomplete
        options={categories}
        value={selectedCategory}
        onChange={(event, newValue) => setSelectedCategory(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            placeholder="Select Category"
            sx={{
              width: { xs: '100%', md: '300px' },
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                border: 'none',
                '& fieldset': {
                  border: 'none',
                },
              },
            }}
            InputProps={{
              ...params.InputProps,
              sx: { color: '#212529', backgroundColor: '#fff' },
            }}
          />
        )}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        sx={{
          width: { xs: '100%', md: '25%' },
          height: { xs: 'auto', md: 'auto' },
          borderRadius: '20px',
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default InputSearch;
