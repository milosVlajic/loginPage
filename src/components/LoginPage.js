import React, { useState } from "react";
import Card from "@mui/material/Card";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import "@fontsource/roboto/400.css";
import {
  Avatar,
  Button,
  CardContent,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { border } from "@mui/system";
import SaveIcon from "@mui/icons-material/Save";

const LoginPage = () => {
  const [checked, setChecked] = useState(false);
  const cardStyle = { height: "70vh", boxShadow: "5px 5px" };
  const textField = { margin: "20px 0" };

  return (
    <Card sx={{ minWidth: 300 }} variant="outlined" style={cardStyle}>
      <CardContent>
        <div align="center">
          <Avatar style={{ backgroundColor: "green" }}>
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
        />

        <TextField
          variant="outlined"
          type="password"
          label="Password"
          placeholder="your password"
          color="primary"
          fullWidth
          required
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                label="Remember me"
                onChange={(e) => setChecked(e.target.value)}
              />
            }
            label="Remember me"
          ></FormControlLabel>
        </FormGroup>
        <Button variant="contained" size="large" type="submit" fullWidth>
          SIGN UP
        </Button>
      </CardContent>
    </Card>
  );
};

export default LoginPage;
