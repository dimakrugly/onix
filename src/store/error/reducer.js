import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newsFailure: false,
}

const error = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setNewsFailure(state, action) {
      state.newsFailure = action.payload
    },
    clearError: () => initialState,
  },
})

export default error.reducer;
export const {
  setNewsFailure,
} = error.actions;
