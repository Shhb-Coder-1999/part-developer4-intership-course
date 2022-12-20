const {root} = require('../../../')
class PlaylistModel{
    constructor(params){
        this.name = params.fields.playlistName;
        this.cover_path = params.files.cover.filepath.split(root)[1];
        this.user_id = 1;
    }
    
}

module.exports = PlaylistModel