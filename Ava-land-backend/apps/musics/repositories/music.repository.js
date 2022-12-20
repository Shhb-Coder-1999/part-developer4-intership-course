const MusicModel = require("../models/music.model");
const likeModel = require("../models/like.model");
const { storage } = require("../../../config");

class Music {
  async create(fields, files, id) {
    try {
      const newMusic = new MusicModel();
      const result = await newMusic.insert(Object.values({
        name:fields.name,
        artist:fields.artist,
        album:fields.album,
        songFilepath:files['song'].filepath.split(storage.root)[1],
        description:fields.description,
        duration:fields.duration,
        coverFilepath:files['cover'].filepath.split(storage.root)[1],
        producer_id:id,
        created_at:Date.now(),
        updated_at:null
      }));

      return newMusic.response(result);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async fetchAll(userId) {
    try {
      const musics = new MusicModel();
      let result = await musics.select(["*"]).execute();
      result = musics.response(result,userId);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async fetchByFilter(filter,value,userId) {
    try {
      const musics = new MusicModel();
      const result = musics.response(await musics.select(["*"]).where(`${filter}=?`,[value]).execute(),userId);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async fetch(id,userId) {
    try {
      const musics = new MusicModel();
      const result = await musics.select(["*"]).where("id=?",[id]).execute();
      const model = await musics.response(result,userId);
      return model;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async delete(id){
    try {
      const musics = new MusicModel();
      const result = await musics.delete().where('id=?',[id]).execute();
      return result;
    } catch (error) {
      
    }
  }
  async update(fields, files, id){
    try {
      const newMusic = new MusicModel();
      const result = await newMusic.update(Object.values({
        name:fields.name,
        artist:fields.artist,
        album:fields.album,
        description:fields.description,
        duration:fields.duration,
        coverFilepath:files['cover'].filepath.split(storage.root)[1],
        updated_at:Date.now()
      }),[
        '"songname"',
        'songartist',
        'songalbum',
        'songdescription',
        '"songduration"',
        'songcover_path',
        'updated_at',
      ]).where("id=?",[id]).execute(true);
      const model = newMusic.response(result);
      return model;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  async like(user_id, song_id) {
    try {
      const like = new likeModel();
      const result = await like.insert([user_id,song_id,Date.now()]);
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async disLike(user_id, song_id) {
    try {
      const like = new likeModel();
      const result = await like.delete().where("user_id=? AND song_id=?",[user_id,song_id]).execute();
      return result;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async similar(artist,id){
    let music = new MusicModel();
    const result = await music.select(['*']).where("songartist=? AND id<>?",[artist,id]).execute();
    const model = await music.response(result);
    return model;
  }
}

module.exports = Music;
