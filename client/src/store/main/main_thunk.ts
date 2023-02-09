import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const hitOfSalesList = createAsyncThunk('/main/products/', async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/user/hit_of_sales');
        return response.data
    } catch (error) {
        return (error as AxiosError).response?.data;
    }
})

export default hitOfSalesList;