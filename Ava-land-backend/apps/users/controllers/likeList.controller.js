const UserRepository = require('../repositories/user.repository');
const userRepository = new UserRepository();


async function getlikes(req,res,queryParams){
    const result = await userRepository.likes(req.auth.id);
    res.response(JSON.stringify(result));
}


module.exports = {
    getlikes
}