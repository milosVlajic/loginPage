import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MainContent from './MainContent';
import NavBar from './NavBar';
import OrderButton from './OrderButton';

const HomePage = props => {
  const history = useHistory();

  if (props.login === false) {
    history.push('/login');
  }
  return (
    <>
      <NavBar />
      <MainContent />
      <OrderButton />
    </>
  );
};

export default HomePage;
