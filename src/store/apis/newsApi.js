import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { urlBase } from '../../constants/urlBase';
import { getRandomAPI } from '../../utils/getRandomAPI';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: urlBase.newsDataBase,
  }),
  endpoints: (build) => ({
    getNews: build.query({
      query: () => ({
        url: getRandomAPI(urlBase.newsDataEndpoint),
        methodL: 'GET',
      }),
    }),
  }),
})

export const { useGetNewsQuery } = newsApi;
