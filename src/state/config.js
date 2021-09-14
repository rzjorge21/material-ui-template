import axios from "axios";
import { default as dictionary } from "../utils/dictionary";

export const axiosConfig = {
  default: {
    client: axios.create({
      baseURL: dictionary.API_URL,
      timeout: 5000,
      responseType: "json",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
    }),
  },
};

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    console.log(response);
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

export const offlineConfig = {
  effect: (effect, _action) => {
    let clientName = _action.meta.offline.client;
    let config = axiosConfig[clientName];
    if (config) {
      return config.client.request(effect);
    }
    return axios(effect);
  },
  discard: (error, _action, _retries) => {
    const { request, response } = error;
    if (!request) throw error;
    if (!response) return false;
    return 400 <= response.status && response.status < 500;
  },
};
