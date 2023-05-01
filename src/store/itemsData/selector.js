import { createSelector } from '@reduxjs/toolkit';

const selectItemsData = (state) => state.items

export const selectItems = createSelector(selectItemsData, ({ items }) => items)
export const selectIsLoadingItems = createSelector(
  selectItemsData,
  ({ isLoadingNews }) => isLoadingNews,
)
export const selectItemsError = createSelector(selectItemsData, ({ itemsFailure }) => itemsFailure)
