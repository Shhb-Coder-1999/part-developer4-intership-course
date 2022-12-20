import UserService from "../../../services/UserService";
import router from "../../../router/index";
import userState from "./state";
import TokenService from "../../../services/token.service";
import { useCookies } from "vue3-cookies";
import store from "../..";

export default {
  async userLogin({ commit }, payload) {
    const response = await UserService.authUser(payload);
    try {
      if (response.id != undefined) {
        commit("user_Login", response);
        TokenService.setUser(response);
        store.dispatch("setSnackbar", {
          message: "خوش آمدید",
          color: "green",
          show: true,
          timeout: 5000,
        });
        router.push("/");
      } else throw new Error("oops");
    } catch (error) {
      store.dispatch("setSnackbar", {
        message: "عدم تطابق نام کاربری و رمز عبور",
        color: "red",
        show: true,
        timeout: 5000,
      });
      console.error("error :", error.message);
    }
  },

  setStageInfo({ commit }, payload) {
    commit("set_Stage_Info", payload);
  },

  async userSignUp({ commit }) {
    const response = await UserService.createUser(userState.user);
    if (response.id != undefined) {
      commit("user_SignUp", response);
      TokenService.setUser(response);
      router.push("/");
    }
  },

  logOut({ commit }) {
    const cookie = useCookies();
    TokenService.removeUser();
    cookie.cookies.remove("token", "/", "localhost");
    commit("log_Out");
    router.push("/Auth/login");
  },

  checkLogin({ commit }) {
    console.log(TokenService.getUser());
    commit("check_Login", TokenService.getUser());
  },

  async forgetPassword({ commit }, payload) {
    console.log("forgetPassword payload : ", payload);
    const response = await UserService.forgetPassword(payload);
    try {
      if (response.status != 200) {
        commit("set_user", response);
        router.push("/Auth/setNewPassword");
      }
    } catch (err) {
      console.error(err);
    }
  },

  async setNewPassword({ commit }, payload) {
    console.log("setNewPassword payload : ", payload);
    const response = await UserService.setNewPassword(payload);
    let resetPassSession = sessionStorage.getItem("resetpassword_session");
    try {
      if (response.id === undefined || resetPassSession === null) {
        router.push("/Auth/recovery");
        throw new Error("setNewPassword action problem !!");
      } else {
        commit("set_user", response);
        router.push("/");
      }
    } catch (err) {
      console.error(err);
    }
  },

  async getLikedMusic({ commit }) {
    try {
      const response = await UserService.getLikedMusic();
      if (Array.isArray(response)) commit("get_Liked_Musics", response);
    } catch (error) {
      console.error("error :", error.message);
    }
  },
};
