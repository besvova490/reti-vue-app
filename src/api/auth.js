// helpers
import axios from "./axios";
import API_ENDPOINTS from "./endpoints.constants";

export default {
  postSignUp (data) {
    return axios.post(API_ENDPOINTS.auth.signUp, data);
  },
  postSignIn (data) {
    return axios.post(API_ENDPOINTS.auth.signIn, data);
  },
  postRefresh (data) {
    return axios.post(API_ENDPOINTS.auth.refresh, data);
  },
  getMe () {
    return axios.get(API_ENDPOINTS.auth.me);
  },
  getTwoFactor () {
    return axios.get(API_ENDPOINTS.auth.twoFactor);
  },
  postTwoFactor (data) {
    return axios.post(API_ENDPOINTS.auth.twoFactor, data);
  },
  deleteTwoFactor () {
    return axios.delete(API_ENDPOINTS.auth.twoFactor);
  }
};
