const {Model} = require('brogrammers');
const {app} = require('../../../');
const MusicModel = require('../../musics/models/music.model');
class userModel extends Model{
  
    constructor(){
        super(app['db'],'users',[
            '"username"',
            '"pass"',
            '"quest"',
            '"ans"',
            'created_at',
            'updated_at'
        ]);
	    }
    response(users){
        users = users.map((user)=>{
            return {
                id:user.id,
                user:user.username,
            }
        })
        return users;
    }
    like(id){
        const relation = {
            identifire:'id',
            pivotTable:'user_liked_song',
            relatedIdentifire:'user_id',
            relatedTable:'songs',
            referenceIdentifire:'id',
            relatedreferenceIdentifire:'song_id',
            relatedModel:new MusicModel()
        };
        return this._manyToMany(relation,[id]);
    }
}
module.exports = userModel;