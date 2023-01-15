import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IAuthValue } from '../../types/interfaces';

const auth = createAsyncThunk('auth', async (authData: IAuthValue) => {
  const response = await axios.post('http://localhost:5000/api/user/auth', authData);
  console.log(response.headers);
  const jwt: string = response.headers.Autharization;
  localStorage.setItem('jwt', jwt);
  return response.data;
});

const authThunks = {
  auth,
};

export default authThunks;
