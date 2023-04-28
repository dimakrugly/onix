import { combineReducers, configureStore } from '@reduxjs/toolkit';
import news from './newsData/reducer'
import error from './error/reducer'

const rootReducer = combineReducers({
  news, error,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})
