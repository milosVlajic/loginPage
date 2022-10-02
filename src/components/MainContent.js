import styled from '@emotion/styled';
import { Toolbar } from '@mui/material';
import React from 'react';
import MyCard from './MyCard';

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
});

const MainContent = () => {
  return (
    <>
      <StyledToolbar>
        <MyCard />
        <MyCard />
        <MyCard />
      </StyledToolbar>
    </>
  );
};

export default MainContent;
