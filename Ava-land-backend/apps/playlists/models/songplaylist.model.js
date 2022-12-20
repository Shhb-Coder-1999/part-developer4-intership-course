const {app} = require('../../../');
const { Model } = require("brogrammers");


class songPlaylistModel extends Model{
    constructor(){
        super(app['db'],'playlist_song',[
            "playlist_id",
            "song_id"
        ]);
     }

    
}

module.exports = songPlaylistModel