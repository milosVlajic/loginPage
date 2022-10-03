import React, { useState } from 'react';

import LockPersonIcon from '@material-ui/icons/LockPerson';

import {
  Link,
  Avatar,
  Button,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  TextField,
} from '@material-ui/core';
import { border } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import HomePage from './HomePage';

const LoginPage = () => {
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const emailChangeHandler = e => {
    setEmail(e.target.value);
    console.log(email);
  };
  const passwordChangeHandler = e => {
    setPassword(e.target.value);
    console.log(password);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (email && password) {
      setLogin(true);
    }
  };

  const cardStyle = { height: '70vh', boxShadow: '5px 5px' };
  const textField = { margin: '20px 0' };

  return (
    <>
      {login || (
        <form onSubmit={submitHandler}>
          <Card sx={{ minWidth: 250 }} variant="outlined" style={cardStyle}>
            <CardContent>
              <div align="center">
                <Avatar style={{ backgroundColor: 'green' }}>
                  <LockPersonIcon fontSize="large" />
                </Avatar>
              </div>

              <Typography variant="h2">Sign in</Typography>
              <TextField
                style={textField}
                variant="outlined"
                type="email"
                label="Email Adress"
                placeholder="milosvlajic@email.com"
                color="primary"
                fullWidth
                required
                onChange={emailChangeHandler}
              />

              <TextField
                variant="outlined"
                type="password"
                label="Password"
                placeholder="your password"
                color="primary"
                fullWidth
                required
                onChange={passwordChangeHandler}
              />
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      label="Remember me"
                      onChange={e => setChecked(e.target.value)}
                    />
                  }
                  label="Remember me"
                ></FormControlLabel>
              </FormGroup>
              <Button
                variant="contained"
                size="large"
                type="submit"
                fullWidth
                style={{ margin: '15px 0' }}
              >
                SIGN UP
              </Button>
              <Typography align="left">
                <Link href="#">Forgot password?</Link>
              </Typography>
              <Typography align="left">
                {' '}
                Don't have an account?
                <Link href="#"> Sign up</Link>
              </Typography>
            </CardContent>
          </Card>
        </form>
      )}
      {login && <HomePage />}
    </>
  );
};

export default LoginPage;
