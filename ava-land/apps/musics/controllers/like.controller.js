const MusicRepository = require("../repositories/music.repository");
const UserRepository = require('../../users/repositories/user.repository');
const userRepository = new UserRepository();
const musicRepository = new MusicRepository();

async function likeOrDislike(req,res){
    try {
        // user = req.owner;
        user = {id:1};
        userlikes = await userRepository.likes(user.id);
        const likeExist = userlikes.some(like => {
            return like.id==req.querystring.id
        });
        let result ;
        let message;
        if (likeExist){
            //delete like from like_user 
            result = await musicRepository.disLike(user.id,req.querystring.id);
            message = "disliked successfully";
        }
        else {
            //insert like to like_user 
            result = await musicRepository.like(user.id,req.querystring.id);
            message = "liked successfully";


        }


        res.writeHead(200,{'Content-type':'application/json'});
        res.end(JSON.stringify({message}));

    } catch (error) {
        res.writeHead(500,{'Content-type':'application/json'});
        res.end("something went wrong :"+error.message);
    }
}


module.exports = {
    likeOrDislike
}