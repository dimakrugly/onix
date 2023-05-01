import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './action';

const initialState = {
  isLoadingNews: false,
  news: [],
  newsFailure: null,
};

const news = createSlice({
  name: 'newsData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoadingNews = true;
        state.newsFailure = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.isLoadingNews = false;
        state.newsFailure = null;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoadingNews = false;
        state.newsFailure = action.payload;
      });
  },
})

export default news.reducer;
