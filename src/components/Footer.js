import React from 'react';

import { Paper, Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  footer: {
    background: 'secondary',
    width: '100%',
    marginBottom: 4,
    color: 'black',
    padding: '6px 30px',
  },
});

const year = new Date();
const fullYear = year.getFullYear();
console.log(fullYear);

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.footer}>
      <Typography>
        <span>&copy;</span>
        {` ${fullYear} Car Charger All Rights Reserved`}
      </Typography>
    </Container>
  );
};

export default Footer;
