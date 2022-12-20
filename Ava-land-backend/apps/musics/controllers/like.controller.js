const MusicRepository = require("../repositories/music.repository");
const UserRepository = require('../../users/repositories/user.repository');
const userRepository = new UserRepository();
const musicRepository = new MusicRepository();

async function likeOrDislike(req,res,queryParams){
    // user = req.owner;

    userlikes = await userRepository.likes(req.auth.id);
    const likeExist = userlikes.some(like => {
        return like.id==queryParams[0]
    });
    let result ;
    let message;
    if (likeExist){
        //delete like from like_user 
        result = await musicRepository.disLike(req.auth.id,queryParams[0]);
        message = "disliked successfully";
    }
    else {
        //insert like to like_user 
        result = await musicRepository.like(req.auth.id,queryParams[0]);
        message = "liked successfully";


    }
    res.response(JSON.stringify({message}));
}


module.exports = {
    likeOrDislike
}