import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

// const StyledButton = styled(Button)({
//   padding: '10px, 5px',
//   margin: '20px ',
// });

const useStyles = makeStyles({
  btn: {
    padding: '10px, 5px',
    margin: '20px ',
  },
});

const OrderButton = () => {
  const classes = useStyles();

  return (
    <div>
      <Button className={classes.btn} variant="text">
        Learn More
      </Button>
      <Button
        className={classes.btn}
        variant="contained"
        style={{ backgroundColor: 'red' }}
      >
        BUY NOW
      </Button>
    </div>
  );
};

export default OrderButton;
