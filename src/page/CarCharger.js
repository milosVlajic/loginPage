import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    marginBottom: 15,
    border: 0,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

const CheckboxExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          icon={<DeleteIcon />}
          checkedIcon={<SaveIcon />}
          onChange={e => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondary checkbox',
          }}
        />
      }
      label="Testing Checkbox"
      style={{ color: 'black' }}
    />
  );
};

const CarCharger = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App-header">
        <ButtonStyled />
        <TextField
          variant="filled"
          color="secondary"
          type="email"
          label="The time"
          placeholder="test@test.com"
        />
        <CheckboxExample />
        <ButtonGroup variant="contained" color="primary">
          <Button startIcon={<SaveIcon />}>Save</Button>

          <Button startIcon={<DeleteIcon />}>Discard</Button>
        </ButtonGroup>
      </div>
    </ThemeProvider>
  );
};

export default CarCharger;
