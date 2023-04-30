import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getRandomAPI } from '../../utils/getRandomAPI';
import { urlBase } from '../../constants/urlBase';

export const fetchNews = createAsyncThunk(
  'news/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(getRandomAPI(urlBase.news))
      return data.results;
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  },
)
