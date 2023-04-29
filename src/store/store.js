import { combineReducers, configureStore } from '@reduxjs/toolkit';
import news from './newsData/reducer'
import items from './itemsData/reducer'

const rootReducer = combineReducers({
  news, items,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})
