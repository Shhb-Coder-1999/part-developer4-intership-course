const {Model} = require('brogrammers');
const {app} = require('../../..');

class likeModel extends Model{
    constructor(){
        super(app['db'],'user_liked_song',[
            '"user_id"',
            '"song_id"',
            'created_at'
        ]);
    }
    
}
module.exports = likeModel;