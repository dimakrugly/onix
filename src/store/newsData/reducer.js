import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoadingNews: false,
  news: [],
};

const news = createSlice({
  name: 'newsData',
  initialState,
  reducers: {
    fetchNewsSuccess(state, action) {
      state.news = action.payload
    },
    updateIsLoading(state, action) {
      state.isLoading = action.payload
    },
  },
})

export default news.reducer;
export const {
  fetchNewsSuccess, updateIsLoading,
} = news.actions;
