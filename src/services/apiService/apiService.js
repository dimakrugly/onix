import axios from 'axios';
import { urlBase } from '../../constants/urlBase';

class ApiService {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: urlBase.sku,
      timeout: 10000,
    });

    this.axiosInstance.interceptors.request.use(
      (config) =>
        // Do something before request is sent
        config,
      (error) =>
        // Do something with request error
        Promise.reject(error)
      ,
    );

    this.axiosInstance.interceptors.response.use(
      (response) =>
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        response.data,
      (error) =>
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        Promise.reject(error)
      ,
    );
  }

  get(endpoint, config = {}) {
    return this.axiosInstance.get(endpoint, config);
  }

  post(endpoint, data, config = {}) {
    return this.axiosInstance.post(endpoint, data, config);
  }

  put(endpoint, data, config = {}) {
    return this.axiosInstance.put(endpoint, data, config);
  }

  delete(endpoint, config = {}) {
    return this.axiosInstance.delete(endpoint, config);
  }
}

export default new ApiService();
