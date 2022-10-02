import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import React from 'react';
import { Stack } from '@mui/system';
import styled from '@emotion/styled';

const NavBar = () => {
  const NavButton = styled(Button)({
    backgroundColor: 'orange',
    color: '#666',
    padding: '3px',
    margin: '10px',
    '&:hover': {
      backgroundColor: 'red',
      color: 'white',
    },
  });

  const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });

  return (
    <AppBar>
      <StyledToolbar>
        <div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <ElectricCarIcon />
          </IconButton>
          <Typography variant="h6">Car Chargers</Typography>
        </div>
        <div>
          <NavButton sx={{ ml: 'auto' }} variant="outlined">
            Home
          </NavButton>
          <NavButton variant="outlined">About Us</NavButton>
          <NavButton variant="outlined">Car Chargers</NavButton>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'red',
              color: 'white',
            }}
          >
            Buy Now
          </Button>
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
