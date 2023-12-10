export default {
  isAuthenticated (store) {
    return localStorage.getItem("accessToken") !== null || store.isAuthenticated;
  },

  isLoading (store) {
    return store.isLoading;
  },

  user (store) {
    return store;
  }
};
