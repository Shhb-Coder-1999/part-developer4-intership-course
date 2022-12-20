import { axiosInstance as Api } from "@/services/Api";

export default {
  async createPlaylist({ name: name, songList: songList }) {
    try {
      console.log(songList);
      const response = await Api.post(
        "/playlists/create",
        {
          playlist: name,
          songs: songList,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getPlaylists() {
    try {
      const response = await Api.get("/playlists/", {
        credentials: "include",
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getPlaylistInfo(id) {
    try {
      const response = await Api.get(`/playlists/${id}`, {
        credentials: "include",
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async getPlaylistsSongs(id) {
    try {
      const response = await Api.get(`/playlists/${id}/musics`, {
        credentials: "include",
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async addToPlaylist({ id: id, songs: songs }) {
    try {
      const response = await Api.post(`/playlist/${id}`, {
        songs: songs,
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async deletePlaylist(id) {
    try {
      const response = await Api.delete("/playlists/" + id, {
        credentials: "include",
      });
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  async deletePlaylistSong(playlistId, musicId) {
    try {
      const response = await Api.delete(
        "/playlists/" + playlistId + "/musics/" + musicId
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },
};
