import PlaylistService from "../../../services/PlaylistService";
import store from "../../index";

export default {
  async createPlaylist({ commit }, payload) {
    console.log("createPlaylist payload: ", payload);
    const response = await PlaylistService.createPlaylist(payload);
    console.log("uploadMusic response: ", response);
    try {
      if (response.id != undefined) {
        commit("create_Playlist", response);
      } else throw new Error("oops");
    } catch (error) {
      console.error("error :", error.message);
    }
  },

  addToSongsList({ commit }, id) {
    commit("add_To_SongsList", id);
  },

  async getPlaylists({ commit }) {
    const response = await PlaylistService.getPlaylists();
    console.log("getPlaylistList response: ", response);
    try {
      if (response.length != 0) {
        commit("get_Playlists", response);
      } else throw new Error("oops");
    } catch (error) {
      console.error("error :", error.message);
    }
  },

  async getPlaylistInfo({ commit }, id) {
    const response = await PlaylistService.getPlaylistInfo(id);
    console.log("getPlaylistInfo response: ", response);
    try {
      if (response.id != undefined) {
        commit("get_PlaylistInfo", response);
      } else throw new Error("oops");
    } catch (error) {
      console.error("error :", error.message);
    }
  },

  async getPlaylistsSongs({ commit }, id) {
    const response = await PlaylistService.getPlaylistsSongs(id);
    console.log("getPlaylistsSongs response: ", response);
    try {
      if (response.length != 0) {
        commit("get_PlaylistsSongs", response);
      } else throw new Error("oops");
    } catch (error) {
      console.error("error :", error.message);
    }
  },

  async addToPlaylist({ commit }, payload) {
    const response = await PlaylistService.addToPlaylist(payload);
    console.log("addToPlaylist response: ", response);
    commit("add_To_Playlist", response);
  },

  async deletePlaylist({ commit, state }) {
    try {
      const response = await PlaylistService.deletePlaylist(
        state.selectedPlaylist.id
      );
      if (!response) throw new Error("response is empty");
      commit("delete_Playlist");
    } catch (error) {
      console.error("error :", error.message);
    }
  },

  async deletePlaylistSong({ commit, state }) {
    try {
      const response = await PlaylistService.deletePlaylistSong(
        state.playlist.id,
        store.state.music.selectedMusics[0].id
      );
      if (!response.message) throw new Error("response is empty");
      commit("delete_PlaylistSong", store);
    } catch (error) {
      console.error("error :", error.message);
    }
  },

  changeSelectedPlaylist({ commit }, playlist) {
    commit("change_Selected_Playlist", playlist);
  },
};
