const { storage } = require('../../../config');
const MusicModel = require('../../musics/models/music.model');
const PlaylistModel = require('../models/playlist.model');
const songPlaylistModel = require('../models/songplaylist.model');


class playlistRepository{

    async create(fields,files,id){
    
        try {
            const playlist = new PlaylistModel();
            const result = await playlist.insert(Object.values({
                playlistName:fields.playlist,
                filepath:files['cover'].filepath.split(storage.root)[1],
                user_id:id,
                created_at:Date.now(),
                updated_at:null
            }));
            const addResult = await this.addToPlaylist(fields.songs.split(','),result[0].id);

            const model = await playlist.response(result);
            return model;
            
        } catch (error) {
            throw new Error(error.message);
        }
           
    }
    async addToPlaylist(songs,id){

        try {
            const songPlaylist = new songPlaylistModel();
            const _songs = [];
            for (const songId of songs) {
                _songs.push({
                    playlist_id:id,
                    song_id:Number(songId),
                    created_at:Date.now(),
                    updated_at:null
                });
            }
            let songsOfPlaylist;
            if(_songs){
                songsOfPlaylist = await songPlaylist.insertMany(_songs);
            }
            return songsOfPlaylist;
        } catch (error) {
            throw new Error(error.message);
        }
       
    }
    async fetchAll(userId) {

        try {
          const playlist = new PlaylistModel();
          const result = await playlist.select(["*"]).where("user_id=?",[userId]).execute();
          const model = await playlist.response(result);
          return model;
        } catch (error) {
          throw new Error(error.message);
        }

    }
    
    async fetch(id) {
        
        try {
            const playlist = new PlaylistModel();
            const result = await playlist.select(["*"]).where('id=?',[id]).execute();
            const model = await playlist.response(result);
            return model;
        } catch (error) {
            throw new Error(error.message);
        }

    }
    async delete(id){

        try {
            const playlist = new PlaylistModel();
            const result = await playlist.delete().where('id=?',[id]).execute();
            return result;
        } catch (error) {
            throw new Error(error.message);
        }

    }
    async update(fields,files,id){

        try {
            const playlist = new PlaylistModel();
            const result = await playlist.update(Object.values({
                playlistName:fields.playlist,
                filepath:files['cover'].filepath.split(storage.root)[1],
                updated_at:Date.now()
            }),[
                "playlistname",
                "playlistcover_path",
                "updated_at"
            ]).where('id=?',[id]).execute(true);
            const model = playlist.response(result);
            return model;
        } catch (error) {
            throw new Error(error.message);
        }

    }
    async songs(id,userId){
        const playlist = new PlaylistModel();
        const musics = await playlist.musics(id).execute();
        const musicModel = new MusicModel();
        const model = await musicModel.response(musics,userId);
        return model;
    }
    async deleteMusicFrom(playlistId,musicId){
        const songsOfPlaylist = new songPlaylistModel();
        const result = await songsOfPlaylist.delete().where("playlist_id=? AND song_id=?",[playlistId,musicId]).execute();
        return result;
    }
}




module.exports = playlistRepository;