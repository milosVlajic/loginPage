import React from 'react';

import { Paper, Container, Box, Typography } from '@material-ui/core';

const year = new Date();
const fullYear = year.getFullYear();
console.log(fullYear);

const Footer = () => {
  return (
    <Paper
      sx={{
        marginTop: 'calc(10% +60px)',
        width: '100%',
        position: 'fixed',
        bottom: 0,
        width: '100%',
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Typography>
          <span>&copy;</span>
          {` ${fullYear} Car Charger All Rights Reserved`}
        </Typography>
      </Container>
    </Paper>

    // <div>
    //   <p>
    //     <span>&copy;</span>
    //     {` ${fullYear} Car Charger All Rights Reserved`}
    //   </p>
    // </div>
  );
};

export default Footer;
