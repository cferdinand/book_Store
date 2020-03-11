const axios = require("axios");

const apiFunctions = {
  getPopular: () => {
    return axios.get("/popular").then(({ data }) => {
      return data;
    });
  },
  getAuthors: () => {
    return axios.get("/authors").then(({ data }) => {
      return data;
    });
  },
  getBooks: () => {
    return axios.get("/books").then(({ data }) => {
      return data;
    });
  }
};

export default apiFunctions;
