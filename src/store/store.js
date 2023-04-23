import { combineReducers, configureStore } from '@reduxjs/toolkit';
import news from './newsData/reducer'

const rootReducer = combineReducers({
  news,
})

export const store = configureStore({
  reducer: rootReducer,
})
