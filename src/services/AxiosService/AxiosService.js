import axios from 'axios';

class AxiosService {
  async getRequest(url) {
    const response = await axios.get(url);
    return response.data;
  }
}

export default new AxiosService();
