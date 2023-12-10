import { createStore } from "vuex";

// stores
import auth from "./auth";

export default createStore({
  modules: { auth }
});
