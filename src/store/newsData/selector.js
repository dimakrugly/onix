import { createSelector } from '@reduxjs/toolkit';

const selectNewsData = (state) => state.news

export const selectNews = createSelector(selectNewsData, ({ news }) => news)
export const selectIsLoadingNews = createSelector(
  selectNewsData,
  ({ isLoadingNews }) => isLoadingNews,
)
export const selectNewsError = createSelector(selectNewsData, ({ newsFailure }) => {
  if (!newsFailure?.message) {
    return ''
  }
  return newsFailure.message
})
