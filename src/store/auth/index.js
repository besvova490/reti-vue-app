// helpers
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const INITIAL_STATE = {
  email: null,
  id: null,
  firstName: null,
  lastName: null,
  role: null,
  logo: null,
  timeZone: null,
  isLoading: false,
  isAuthenticated: localStorage.getItem("accessToken") !== null
};

export default {
  namespaced: true,
  state () {
    return { ...INITIAL_STATE };
  },
  getters,
  mutations,
  actions
};
