import { createSlice } from '@reduxjs/toolkit';
import { fetchNews } from './action';

const initialState = {
  isLoadingNews: false,
  news: [],
  newsFailure: false,
};

const news = createSlice({
  name: 'newsData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoadingNews = true;
        state.newsFailure = false;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload;
        state.isLoadingNews = false;
        state.newsFailure = false;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoadingNews = false;
        state.newsFailure = action.payload;
      });
  },
})

export default news.reducer;
