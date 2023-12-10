import baseAxios from "axios";

const axios = baseAxios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

axios.interceptors.request.use(config => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `JWT ${token}`;
  }

  return config;
});

export default axios;
