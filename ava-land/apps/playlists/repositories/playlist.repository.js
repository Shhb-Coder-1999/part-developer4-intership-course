const PlaylistModel = require("../models/playlist.model");
const { DB } = require("../../../");

class playlistRepository {
  async create(fields, files) {
    try {
      const playlist = new PlaylistModel({ fields, files });
      const result = await DB.query(
        "INSERT INTO playlist(name,cover_path,user_id) VALUES($1,$2,$3)",
        [playlist.name, playlist.cover_path, playlist.user_id]
      );
      return playlist;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async fetchAll() {
    try {
      const result = await DB.query("SELECT * FROM playlist");
      const playlists = result.rows;
      return playlists;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async fetch(id) {
    try {
      const result = await DB.query("SELECT * FROM playlist WHERE id = $1", [
        id,
      ]);
      const playlist = result.rows[0];
      return playlist;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = playlistRepository;
