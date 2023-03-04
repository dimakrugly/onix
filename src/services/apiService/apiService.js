class ApiService {
  getResource(url) {
    return fetch(url).then((result) => {
      if (!result.ok) {
        throw new Error(`Error is ${result.error}`);
      }
      return result.json();
    });
  }

  getItems = () => this.getResource('https://mocki.io/v1/ea598edf-50f4-4064-b4d4-9ad1d3b9f14b').then((body) => body.items);
}

export default new ApiService();
