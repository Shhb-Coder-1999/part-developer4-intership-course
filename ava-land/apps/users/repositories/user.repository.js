const {DB,config} = require("../../../");

class userRepository{

    async likes(id){
        try {
            const result = await DB.query(`select song.* from ${config.databaseConfig.schema}.user left join user_liked_song `+
            `on ${config.databaseConfig.schema}.user.id = user_liked_song.user_id and ${config.databaseConfig.schema}.user.id = $1 left join song`+ ` on song.id = user_liked_song.song_id`,[id])
            const likes = result.rows;
            return likes;
        } catch (error) {
            throw new Error(error.message);
        }
           
    }
    
}


module.exports = userRepository;
