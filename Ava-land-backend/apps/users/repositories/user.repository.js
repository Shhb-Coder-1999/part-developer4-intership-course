const MusicModel = require("../../musics/models/music.model");
const UserModel = require("../models/user.model");

class userRepository{

    async likes(id){
        try {
            const user = new UserModel();
            const result  = await user.like(id).execute();
            const musicModel = new MusicModel();
            const model = await musicModel.response(result);
            return model;
        } catch (error) {
            throw new Error(error.message);
        }
           
    }
    async user(filter,value){
        try {
            const user = new UserModel();
            const result  = await user.select(["*"]).where(`${filter}=?`,[value]).execute();
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    }
}


module.exports = userRepository;
