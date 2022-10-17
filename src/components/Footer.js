import React from 'react';

import { Paper, Container, Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  footer: {
    backgroundColor: 'secondary',
    width: '100%',
    marginBottom: 0,
  },
});

const year = new Date();
const fullYear = year.getFullYear();
console.log(fullYear);

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography>
          <span>&copy;</span>
          {` ${fullYear} Car Charger All Rights Reserved`}
        </Typography>
      </Container>
    </footer>
    // <Paper
    //   sx={{
    //     marginTop: 'calc(10% +60px)',
    //     width: '100%',
    //     position: 'sticky',
    //     bottom: 0,
    //     width: '100%',
    //   }}
    //   component="footer"
    //   square
    //   variant="outlined"
    // >
    //   <Container maxWidth="lg">
    //     <Typography>
    //       <span>&copy;</span>
    //       {` ${fullYear} Car Charger All Rights Reserved`}
    //     </Typography>
    //   </Container>
    // </Paper>

    // <div>
    //   <p>
    //     <span>&copy;</span>
    //     {` ${fullYear} Car Charger All Rights Reserved`}
    //   </p>
    // </div>
  );
};

export default Footer;
