import React from 'react';
import { Container, Button } from '@material-ui/core/';
import { Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
  const history = useHistory();

  const goToHomepageHandler = () => {
    history.push('/login');
  };

  return (
    <Container>
      <Typography variant="h2" style={{ color: 'black', fontWeight: 600 }}>
        Page not found!
      </Typography>

      <Button onClick={goToHomepageHandler} variant="contained" color="primary">
        Go To HomePage
      </Button>
    </Container>
  );
};

export default NotFound;
