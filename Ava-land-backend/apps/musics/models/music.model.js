const { Model } = require("brogrammers");
const {app} = require("../../../");
const { getMimeNameFromExt } = require("../../../utils/helper");
const path = require('path');
const likeModel = require('./like.model');

class MusicModel extends Model{
  
  constructor() {
    super(app['db'],'songs',[
      '"songname"',
      'songartist',
      'songalbum',
      '"songpath"',
      'songdescription',
      '"songduration"',
      'songcover_path',
      'producer_id',
      'created_at',
      'updated_at',

    ]);
  }
  async response(songs,id){
    let index = 0;
    for (let music of songs) {
      const like = new likeModel()
      let likeStatus = false;

      if (id){
        const result = await like.select(["*"]).where("song_id=? AND user_id=?",[music.id,id]).execute();
        likeStatus = result.length == 0 ? false : true;
      }

      const b64Img =  await app.storage.read(music.songcover_path,'base64');
      songs[index] = {
        id:music.id,
        name:music.songname,
        artist:music.songartist,
        album:music.songalbum,
        description:music.songdescription,
        duration:music.songduration,
        path:music.songpath,
        like:likeStatus,
        img:`data:${getMimeNameFromExt(path.extname(music.songcover_path))};base64,` + b64Img,
        producer_id:music.producer_id,
        releaseTime:new Date(Number(music.created_at)),
        updated_at:music.updated_at
      }
      index+=1;
    }
    return songs;
  }
}

module.exports = MusicModel;
