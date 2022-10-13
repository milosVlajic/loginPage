import React, { useState } from 'react';
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import MenuIcon from '@material-ui/icons/Menu';
import '@fontsource/roboto';

import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';

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
  typography: {
    h2: {
      fontSize: 18,
    },
  },
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
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
      <Container maxWidth="xs">
        <div className="App-header">
          <AppBar color="secondary">
            <Toolbar>
              <IconButton>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6">MUI Theming</Typography>
              <Button>Login</Button>
            </Toolbar>
          </AppBar>
          <Typography variant="h3" color="secondary">
            Welcome to MUI
          </Typography>

          <Typography variant="subtitle1" color="secondary">
            Learn how to use Material Ui
          </Typography>
          <ButtonStyled />
          <Grid container spacing={2} justify="center">
            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>

            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>

            <Grid item xs={3} sm={6}>
              <Paper style={{ height: 75, width: '100%' }} />
            </Grid>
          </Grid>
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
      </Container>
    </ThemeProvider>
  );
};

export default CarCharger;
