const {app} = require('../../../');
const { Model } = require("brogrammers");
const { getMimeNameFromExt } = require('../../../utils/helper');
const path = require('path');
const MusicModel = require('../../musics/models/music.model');


class PlaylistModel extends Model{
    constructor(){
        super(app['db'],'playlists',[
            'playlistname',
            'playlistcover_path',
            'user_id',
            'created_at',
            'updated_at'
        ]);
    }
    async response(playlists){
      let index = 0;
      for (const playlist of playlists) {
        
        try {
          const b64Img = await app.storage.read(playlist.playlistcover_path,'base64');
          playlists[index] = {
            id:playlist.id,
            name:playlist.playlistname,
            user_id:playlist.user_id,
            img:`data:${getMimeNameFromExt(path.extname(playlist.playlistcover_path))};base64,` + b64Img,
            created_at:playlist.created_at,
            updated_at:playlist.updated_at
          }
        } catch (error) {
          error.code = '500';
          throw error;
        }
   
        
      
        index+=1;
      }

         
      return playlists;
    }
    // manyToMany(id){
    //   const relation = {
    //     relatedIdentifire:'playlist_id',
    //     relatedTable:'songs',
    //     referenceIdentifire:'id',
    //     relatedreferenceIdentifire:'song_id',
    //     relatedModel:new MusicModel()
    //   };
    //   this._hasMany(relation,[id])
    // }
    musics(id){
      const relation = {
          identifire:'id',
          pivotTable:'playlist_song',
          relatedIdentifire:'playlist_id',
          relatedTable:'songs',
          referenceIdentifire:'id',
          relatedreferenceIdentifire:'song_id',
          relatedModel:new MusicModel()
      };
      this._manyToMany(relation,[id]);
      return this;
  }
}

module.exports = PlaylistModel