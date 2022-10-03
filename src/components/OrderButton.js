import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

// const StyledButton = styled(Button)({
//   padding: '10px, 5px',
//   margin: '20px ',
// });

const useStyles = makeStyles({
  root: {
    padding: '10px, 5px',
    margin: '20px ',
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}></Button>;
}

const OrderButton = () => {
  return (
    <div>
      <ButtonStyled variant="text">Learn More</ButtonStyled>
      <ButtonStyled variant="contained" style={{ backgroundColor: 'red' }}>
        BUY NOW
      </ButtonStyled>
    </div>
  );
};

export default OrderButton;
