import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  btn: {
    backgroundColor: 'orange',
    color: '#666',
    padding: '3px',
    margin: '10px',
    '&:hover': {
      backgroundColor: 'red',
      color: 'white',
    },
  },
  tool: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.tool}>
        <div>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <DriveEtaIcon />
          </IconButton>
          <Typography variant="h6">Car Chargers</Typography>
        </div>
        <div>
          <Button
            className={classes.btn}
            sx={{ ml: 'auto' }}
            variant="outlined"
          >
            Home
          </Button>
          <Button className={classes.btn} variant="outlined">
            About Us
          </Button>
          <Button className={classes.btn} variant="outlined">
            Car Chargers
          </Button>
          <Link to="/login">
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'red',
                color: 'white',
              }}
            >
              LOGOUT
            </Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
