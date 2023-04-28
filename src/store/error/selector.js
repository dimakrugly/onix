import { createSelector } from '@reduxjs/toolkit';

const selectError = (state) => state.error

export const selectNewsError = createSelector(selectError, ({ newsFailure }) => newsFailure)
