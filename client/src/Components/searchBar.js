import React, { useState } from 'react';
import { TextField, Button, Box  , IconButton} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };


  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <Box display="flex" alignItems="center" mt={2}>
      <TextField
        label="Search by username, first name, email"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={handleClear}
              sx={{ visibility: searchTerm ? 'visible' : 'hidden' }}
            >
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => onSearch(searchTerm)}
        sx={{ ml: 2 }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
