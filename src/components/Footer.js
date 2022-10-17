import React from 'react';

import { Paper, Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  footer: {
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'green',
    textAlign: 'left',
  },
});

const year = new Date();
const fullYear = year.getFullYear();
console.log(fullYear);

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography>
        <span>&copy;</span>
        {` ${fullYear} Car Charger All Rights Reserved`}
      </Typography>
    </footer>
  );
};

export default Footer;
