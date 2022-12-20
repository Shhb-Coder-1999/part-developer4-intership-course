const app = require('../../../');

async function login(req,res){
    const result  = await app.auth.login(req,res);
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify(result));
}
async function signup(req,res){
    const user = await app.auth.signup(req,res);
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify(user));
}

module.exports = {
    login,
    signup,
}