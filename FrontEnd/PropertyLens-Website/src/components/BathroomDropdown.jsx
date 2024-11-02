import React, { useState, useContext } from 'react';
import { Select, MenuItem, FormControl, Box, Typography } from '@mui/material';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

// Import house context
import { HouseContext } from './HouseContext';

const BathroomDropdown = () => {
  const { bathrooms, setBathrooms } = useContext(HouseContext);
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setBathrooms(event.target.value);
  };

  const bathroomOptions = ['Bathrooms (any)', 0, 1, 2, 3];

  return (
    <FormControl fullWidth>
      <Select
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        value={bathrooms}
        onChange={handleChange}
        displayEmpty
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <RiHome5Line style={{ fontSize: 24, marginRight: 18, color: '#6366f1' }} />
            <Box sx={{ flexGrow: 1 }}>
              <Typography sx={{ fontSize: 15, fontWeight: 600 }}>
                {selected || "Bathrooms (any)"}
              </Typography>
              <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
                Select bathroom count
              </Typography>
            </Box>
            {open ? <RiArrowDownSLine style={{ fontSize: 24, color: '#6366f1' }} /> : <RiArrowUpSLine style={{ fontSize: 24, color: '#6366f1' }} />}
          </Box>
        )}
        IconComponent={() => null}
      >
        {bathroomOptions.map((item, index) => (
          <MenuItem 
            value={item} 
            key={index}
            sx={{
              fontSize: 15,
              padding: '6px 24px',
              '&:hover': { color: '#7c3aed' },
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default BathroomDropdown;
