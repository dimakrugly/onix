import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { urlBase } from '../../constants/urlBase';

export const fetchItems = createAsyncThunk(
  'items/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(urlBase.sku)
      return data.items;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  },
)
