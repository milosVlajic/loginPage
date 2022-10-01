import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import ElectricCarIcon from "@mui/icons-material/ElectricCar";
import React from "react";
import { Stack } from "@mui/system";

const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <ElectricCarIcon />
        </IconButton>
        <Typography variant="h6">Car Chargers</Typography>
        <Button
          sx={{ marginLeft: "auto" }}
          color="secondary"
          variant="outlined"
        >
          Home
        </Button>
        <Button color="secondary" variant="outlined">
          About Us
        </Button>
        <Button color="secondary" variant="outlined">
          Car Chargers
        </Button>
        <Button color="secondary" variant="contained">
          Buy Now
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
