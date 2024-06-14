import React from 'react';
import { Button, ButtonGroup, Box } from '@mui/material';

interface FilterControlsProps {
  filter: 'all' | 'active' | 'expired';
  setFilter: (filter: 'all' | 'active' | 'expired') => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ filter, setFilter }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          variant={filter === 'all' ? 'contained' : 'outlined'}
          onClick={() => setFilter('all')}
        >
          All
        </Button>
        <Button
          variant={filter === 'active' ? 'contained' : 'outlined'}
          onClick={() => setFilter('active')}
        >
          Active
        </Button>
        <Button
          variant={filter === 'expired' ? 'contained' : 'outlined'}
          onClick={() => setFilter('expired')}
        >
          Expired
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default FilterControls;
