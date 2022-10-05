import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '@material-ui/core/';
import { Typography } from '@material-ui/core';

const NotFound = () => {
  return (
    <Container>
      <Typography variant="h2" style={{ color: 'black', fontWeight: 600 }}>
        Page not found!
      </Typography>
      <Link to="/login">
        <Button variant="contained" color="primary">
          Go To HomePage
        </Button>
      </Link>
    </Container>
  );
};

export default NotFound;
