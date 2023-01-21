import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box, FormControl, Input, InputLabel, InputAdornment, Button, IconButton,
} from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useAppDispatch } from '../../types/redux-hooks';
import authThunks from '../../store/login/login_thunks';
import { IAuthValue } from '../../types/interfaces';
import '../../styles/login/login.scss';
import HeaderController from '../main/header/header_controller';

const Login: React.FC = function ComposedTextField() {
  const { auth } = authThunks;
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const {
    register, handleSubmit,
  } = useForm<IAuthValue>({ shouldUseNativeValidation: true });
  const handleClickShowPassword: () => void = () => setShowPassword((show) => !show);
  const handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void = (event) => {
    event.preventDefault();
  };
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<IAuthValue> = (data) => {
    dispatch(auth(data));
  };
  return (
    <>
      <HeaderController />
      <div className="login-page-container">
        <Box
          onSubmit={handleSubmit(onSubmit)}
          className="login-form-wrapper"
          component="form"
          autoComplete="off"
        >
          <h1>Login</h1>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-simple">Email</InputLabel>
            <Input
              id="component-simple"
              type="email"
              {...register('email', { required: 'Please enter your email.' })}
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="component-helper">Password</InputLabel>
            <Input
              {...register('password', { required: 'Please enter your password.' })}
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
          <Button type="submit" variant="outlined">Login</Button>
        </Box>
        <span>
          {'If you do not have an account, please '}
          <NavLink to="/registration">register</NavLink>
          .
        </span>
      </div>
    </>
  );
};

export default Login;
