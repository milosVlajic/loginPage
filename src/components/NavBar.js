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

const NavBar = () => {
  //   const NavButton = styled(Button)({
  //     backgroundColor: 'orange',
  //     color: '#666',
  //     padding: '3px',
  //     margin: '10px',
  //     '&:hover': {
  //       backgroundColor: 'red',
  //       color: 'white',
  //     },
  //   });

  const createStyles = makeStyles({
    root: {
      backgroundColor: 'orange',
      color: '#666',
      padding: '3px',
      margin: '10px',
      '&:hover': {
        backgroundColor: 'red',
        color: 'white',
      },
    },
  });

  function ButtonStyled() {
    const classes = createStyles();
    return <Button className={classes.root}></Button>;
  }

  // const StyledToolbar = styled(Toolbar)({
  //   display: 'flex',
  //   justifyContent: 'space-between',
  // });

  const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  });

  function ToolbarStyled() {
    const classes = useStyles();
    return <Toolbar className={classes.root}></Toolbar>;
  }

  return (
    <AppBar>
      <ToolbarStyled>
        <div>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <DriveEtaIcon />
          </IconButton>
          <Typography variant="h6">Car Chargers</Typography>
        </div>
        <div>
          <ButtonStyled sx={{ ml: 'auto' }} variant="outlined">
            Home
          </ButtonStyled>
          <ButtonStyled variant="outlined">About Us</ButtonStyled>
          <ButtonStyled variant="outlined">Car Chargers</ButtonStyled>
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
      </ToolbarStyled>
    </AppBar>
  );
};

export default NavBar;
