import React, { useState } from 'react';
import { TextField, Button, Container, Box } from '@mui/material';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
      <Box display="flex" alignItems="center" mt={2}>
        <TextField
          label="Search on the basis of username , firstname , email"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSearch}
          sx={{ ml: 2 }}
        >
          Search
        </Button>
      </Box>
    </Container>
  );
};

export default SearchBar;
