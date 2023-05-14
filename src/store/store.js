import { configureStore } from '@reduxjs/toolkit';
import { newsApi } from './apis/newsApi';
import news from './newsData/reducer'
import items from './itemsData/reducer'

export const store = configureStore({
  reducer: {
    news, items, [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(newsApi.middleware),
})
