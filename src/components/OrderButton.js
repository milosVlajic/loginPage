import styled from '@emotion/styled';
import { Style } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react';

const StyledButton = styled(Button)({
  padding: '10px, 5px',
  margin: '20px ',
});

const OrderButton = () => {
  return (
    <div>
      <StyledButton variant="text">Learn More</StyledButton>
      <StyledButton variant="contained" style={{ backgroundColor: 'red' }}>
        BUY NOW
      </StyledButton>
    </div>
  );
};

export default OrderButton;
