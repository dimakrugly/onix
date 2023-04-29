import { createSlice } from '@reduxjs/toolkit';
import { fetchItems } from './action';

const initialState = {
  isLoadingItems: false,
  items: [],
  itemsFailure: false,
};

const items = createSlice({
  name: 'itemsData',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.isLoadingItems = true;
        state.itemsFailure = false;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoadingItems = false;
        state.itemsFailure = false;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.isLoadingItems = false;
        state.itemsFailure = action.payload;
      });
  },
})

export default items.reducer;
