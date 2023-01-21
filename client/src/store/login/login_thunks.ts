import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { IAuthValue } from '../../types/interfaces';

const auth = createAsyncThunk('auth', async (authData: IAuthValue) => {
  try {
    const response = await axios.post('http://localhost:5000/api/user/auth', authData);
    const jwt: string = response.data.token;
    localStorage.setItem('jwt', jwt);
    return response.data;
  } catch (error) {
    return (error as AxiosError).response?.data;
  }
});

const authThunks = {
  auth,
};

export default authThunks;
