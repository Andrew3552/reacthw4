import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendRequest } from '../components/Helper/sendRequest';

export const fetchData = createAsyncThunk(
    'products/fetchData',
    async (_, thunkAPI) => {
      try {
        const response = await sendRequest('/data.json');
        console.log(response);
        return response; // Предположим, что данные находятся в свойстве 'data'
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  