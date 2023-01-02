import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import '../../styles/registration/registration.scss';

const Registration: React.FC = function ComposedTextField() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [age, setAge] = React.useState('');
  const handleClickShowPassword: () => void = () => setShowPassword((show) => !show);
  const handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void = (event) => {
    event.preventDefault();
  };
  const handleChange: (event: SelectChangeEvent) => void = (event) => {
    setAge(event.target.value);
  };
  const ageRange: Array<number> = Array(100).fill(1);
  return (
    <Box
      className="registration-form-wrapper"
      component="form"
      autoComplete="off"
    >
      <h1>Registration</h1>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input
          id="component-simple"
          startAdornment={(
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
                  )}
        />
      </FormControl>
      <FormControl variant="standard">
        <InputLabel htmlFor="component-simple">Last name</InputLabel>
        <Input
          id="component-simple"
          startAdornment={(
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
                  )}
        />
      </FormControl>
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
        <FormHelperText id="component-helper-text">
          Password must include at least 8 characters
        </FormHelperText>
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
        <FormHelperText id="component-helper-text">
          Repeat the entered password
        </FormHelperText>
      </FormControl>
      <FormControl variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          {ageRange.map((_, index) => <MenuItem value={index + 1}>{index + 1}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Registration;
