import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import '../../styles/login/login.scss';

const Login: React.FC = function ComposedTextField() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword: () => void = () => setShowPassword((show) => !show);
  const handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void = (event) => {
    event.preventDefault();
  };
  return (
    <div className="login-page-container">
      <Box
        className="login-form-wrapper"
        component="form"
        autoComplete="off"
      >
        <h1>Login</h1>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-simple">Email</InputLabel>
          <Input
            id="component-simple"
          />
        </FormControl>
        <FormControl variant="standard">
          <InputLabel htmlFor="component-helper">Password</InputLabel>
          <Input
            id="component-helper"
            aria-describedby="component-helper-text"
            type={showPassword ? 'text' : 'password'}
            endAdornment={(
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
                  )}
          />
        </FormControl>
        <Button variant="outlined">Login</Button>
      </Box>
      <span>
        {'If you do not have an account, please '}
        <NavLink to="/registration">register</NavLink>
        .
      </span>
    </div>
  );
};

export default Login;
