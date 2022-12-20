import MusicService from "../../../services/MusicService";
import router from "../../../router/index";
import UserService from "../../../services/UserService";
import musicState from "./state";
import store from "../..";

export default {
  async uploadMusic({ commit }) {
    const response = await MusicService.uploadMusic(musicState.music);
    console.log("uploadMusic response: ", response);
    try {
      if (response.id != undefined) {
        commit("upload_Music", response);
        router.push(`/music/${response.id}`);
        store.dispatch("setSnackbar", {
          message: "موزیک با موفقیت آپلود شد.",
          color: "green",
          show: true,
          timeout: 5000,
        });
      }
    } catch (error) {
      store.dispatch("setSnackbar", {
        message: error,
        color: "red",
        show: true,
        timeout: 5000,
      });
      console.error("error :", error.message);
    }
  },
  async editMusic({ commit }, musicData) {
    try {
      const response = await MusicService.editMusic(musicData);
      if (!response) throw new Error("response is empty");
      commit("edit_Music", response);
    } catch (error) {
      console.error("error :", error.message);
    }
  },
  async deleteMusic({ commit, state }) {
    try {
      const response = await MusicService.deleteMusic(
        state.selectedMusics[0].id
      );
      if (!response) throw new Error("response is empty");
      commit("delete_Music");
      router.back();
    } catch (error) {
      console.error("error :", error.message);
    }
  },
  setMusicFile({ commit }, musicFile) {
    commit("set_Music_File", musicFile);
  },

  setPlayedMusic({ commit }) {
    commit("set_PlayedMusic");
  },

  addToSelectedMusic({ commit }, song) {
    commit("add_To_Selected_Music", song);
  },

  async getMusic({ commit }, id) {
    const response = await MusicService.getMusic(id);
    try {
      if (response.id != undefined) {
        commit("get_Music", response);
      } else throw new Error("oops");
    } catch (error) {
      router.push(`/`);
      console.error("error :", error.message);
    }
  },

  playMusic({ commit }, music) {
    commit("play_Music", music);
  },

  changeSelectedMusic({ commit }, song) {
    commit("change_Selected_Music", song);
  },

  resetSelectedMusics({ commit }) {
    commit("reset_selectedMusics");
  },

  async likeMusic({ commit }, id) {
    try {
      const response = await MusicService.likeMusic(id);
      if (!response) throw new Error("response is empty");
    } catch (error) {
      console.error("error :", error.message);
    }
  },

  async getPlayOn({ commit }) {
    try {
      const response = await MusicService.getPlayOn();
      if (response) commit("set_playOn_time", response);
    } catch (err) {
      console.error("error :", err.message);
    }
  },

  async getUserPrevMusic({ commit }) {
    try {
      const playOnTime = await MusicService.getPlayOn();
      const response = await MusicService.getPrevMusic(playOnTime);
      if (response.id != undefined) commit("set_prev_music", response);
    } catch (err) {
      console.error("error :", err.message);
    }
  },

  async getGuestPrevMusic({ commit }, id) {
    try {
      const response = await MusicService.getMusic(id);
      if (response.id != undefined) commit("set_prev_music", response);
    } catch (err) {
      console.error("error :", err.message);
    }
  },

  async getPopularMusics({ commit }) {
    try {
      const response = await MusicService.getPopularMusics();
      if (Array.isArray(response)) commit("set_popular_musics", response);
    } catch (err) {
      console.error("error :", err.message);
    }
  },

  async getPlayedHistory({ commit }) {
    try {
      const response = await UserService.getPlayedHistory();
      if (Array.isArray(response)) commit("set_played_history", response);
    } catch (err) {
      console.error("error :", err.message);
    }
  },

  async getSimilarMusics({ commit }, producerId) {
    try {
      const response = await MusicService.getSimilarMusics(producerId);
      if (Array.isArray(response)) commit("set_similar_musics", response);
    } catch (err) {
      console.error("error :", err.message);
    }
  },
  async getSearchedResults({ commit }, searchInput) {
    try {
      if (searchInput == "") {
        commit("clear_searched_results");
        return;
      }
      const response = await UserService.getSearchedResults(searchInput);
      commit("set_searched_results", response.hits.hits);
    } catch (error) {
      console.error("error getSearchedResults :", error.message);
    }
  },
};
