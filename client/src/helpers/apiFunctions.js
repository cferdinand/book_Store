const axios = require("axios");

const apiFunctions = {
  getPopular: () => {
    return axios.get("/popular").then(({ data }) => {
      return data;
    });
  }
};

export default apiFunctions;
