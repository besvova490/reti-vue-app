// helpers
import auth from "@/api/auth";

export default {
  async getUserProfile (context) {
    try {
      context.commit("setLoading", true);

      const userData = await auth.getMe();
      context.commit("setState", userData.data);
    } finally {
      context.commit("setLoading", false);
    }
  }
};
