const {app} = require('../../../');
async function signup(req,res,queryParams){
    const {params} = req;
    let result = await app.services.auth.signup({
        user:params.user,
        password:params.password,
        confirmation:params.confirmation,
        question:params.question,
        answer:params.answer
    });
    
    res.setHeader('Access-Control-Allow-Credentials',"true");
    res.setHeader('Set-Cookie',result.cookie+" SameSite=None; Secure");
    res.response(JSON.stringify(
        result.user
    ));
}

async function login(req,res,queryParams){
    const {params} = req;
    const result = await app.services.auth.login({
        user:params.user,
        password:params.password,
    });
    
    res.setHeader('Access-Control-Allow-Credentials',"true");
    res.setHeader('Set-Cookie',result.cookie+'; SameSite=None; Secure');
    res.response(JSON.stringify(result.user));
}
async function forgetPassword(req,res,queryParams){
    const {params} = req;
    const session = await app.services.auth.forgetPassword({
        user:params.user,
        question:params.question,
        answer:params.answer
    });
    res.setHeader('Set-Cookie',session+'; SameSite=None; httpOnly; Secure;');
    res.response(JSON.stringify({}));
}
async function resetPassword(req,res,queryParams){
    const {params} = req;
    const result = await app.services.auth.resetPassword({
        password:params.password,
        session:req.cookies['resetpassword_session']
    });
    res.response(JSON.stringify({
        user:result.user,
        message:"password changed successfully"
    }));
}
function checkLogin(req,res,queryParams){
    res.response(JSON.stringify(req.auth));
}
module.exports = {
    login,
    signup,
    checkLogin,
    forgetPassword,
    resetPassword
}