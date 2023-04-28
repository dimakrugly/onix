import axios from 'axios';
import { batch } from 'react-redux';
import { fetchNewsSuccess, updateIsLoading } from './reducer';
import { clearError, setNewsFailure } from '../error/reducer';
import { getRandomAPI } from '../../utils/getRandomAPI';

export const getNewsRequest = () => (dispatch) => {
  dispatch(updateIsLoading(true))
  axios.get(getRandomAPI())
    .then((response) => {
      batch(() => {
        dispatch(fetchNewsSuccess(response.data.results));
        dispatch(updateIsLoading(false));
        dispatch(clearError());
      })
    })
    .catch((error) => {
      batch(() => {
        dispatch(updateIsLoading(false))
        dispatch(setNewsFailure(error))
      })
    });
};
