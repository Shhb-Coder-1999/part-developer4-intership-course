const MusicModel = require("../models/music.model");
const { DB } = require("../../../");

class Music {
  async create(fields, files) {
    const newMusic = new MusicModel(fields, files);
    try {
      await DB.query(
        "INSERT INTO song (name, genre, path, created_at, updated_at , description , cover_path ,producer_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",
        [
          newMusic.name,
          newMusic.genre,
          newMusic.path,
          newMusic.created_at,
          newMusic.updated_at,
          newMusic.description,
          newMusic.cover_path,
          1,
        ]
      );
      return newMusic;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async fetchAll() {
    try {
      const result = await DB.query("SELECT * FROM song");
      return result.rows;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async fetch(id) {
    try {
      const result = await DB.query("SELECT * FROM song WHERE id = $1", [id]);
      const music = result.rows[0];
      return music;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async like(user_id, song_id) {
    try {
      const result = await DB.query(
        "INSERT INTO user_liked_song(user_id,song_id) VALUES($1,$2);",
        [user_id, song_id]
      );
      return result.rowCount;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async disLike(user_id, song_id) {
    try {
      const result = await DB.query(
        "DELETE FROM user_liked_song WHERE user_id = $1 AND song_id = $2;",
        [user_id, song_id]
      );
      return result.rowCount;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

module.exports = Music;
