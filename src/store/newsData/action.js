import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getRandomAPI } from '../../utils/getRandomAPI';
import { urlBase } from '../../constants/urlBase';

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(getRandomAPI(urlBase.news))
      return response.data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  },
)
