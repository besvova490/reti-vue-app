export default {
  setLoading (state, payload) {
    state.isLoading = payload;
  },

  setState (state, payload) {
    Object.assign(state, payload);
  },

  setIsAuthenticated (state, payload) {
    state.isAuthenticated = payload;
  }
};
