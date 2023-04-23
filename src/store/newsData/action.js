import axios from 'axios';
import { batch } from 'react-redux';
import { fetchNewsSuccess, updateIsLoading } from './reducer';
import { urlBase } from '../../constants/urlBase';
import { setNewsFailure } from '../error/reducer';

export const getNewsRequest = () => (dispatch) => {
  dispatch(updateIsLoading(true))
  axios.get(urlBase.news)
    .then((response) => {
      batch(() => {
        dispatch(fetchNewsSuccess(response.data.results));
        dispatch(updateIsLoading(false))
      })
    })
    .catch((error) => {
      batch(() => {
        dispatch(updateIsLoading(false))
        dispatch(setNewsFailure(error))
      })
    });
};
