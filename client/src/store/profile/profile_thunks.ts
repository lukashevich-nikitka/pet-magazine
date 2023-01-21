import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

const autharization = createAsyncThunk('autharization', async () => {
  try {
    const jwt = localStorage.getItem('jwt');
    const response = await axios.get('http://localhost:5000/api/user/autharization', {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    return response.data;
  } catch (error) {
    return (error as AxiosError).response?.data;
  }
});

export default autharization;
