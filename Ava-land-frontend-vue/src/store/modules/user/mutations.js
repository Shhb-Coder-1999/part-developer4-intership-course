export default {
  user_Login(defaultState, userData) {
    defaultState.isLogin = true;
    defaultState.user = userData;
  },

  set_Stage_Info(defaultState, userData) {
    Object.assign(defaultState.user, userData);
  },

  user_SignUp(defaultState, userData) {
    defaultState.isLogin = true;
    Object.assign(defaultState.user, userData);
  },

  log_Out(defaultState) {
    defaultState.user = {};
  },
  check_Login(defaultState, user) {
    if (user != null) {
      defaultState.isLogin = true;
      defaultState.user = user;
    }
  },

  set_user(defaultState, user) {
    defaultState.user = user;
  },
  get_Liked_Musics(defaultState, likedSongs) {
    defaultState.likedMusics = likedSongs;
  },
};
