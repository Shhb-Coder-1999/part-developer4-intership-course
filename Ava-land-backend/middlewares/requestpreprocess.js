const {app} = require('../');

async function requestPreProcess(req,res,next){
    try {
        req.ip = req.socket.remoteAddress; // ip

        req.cookies = {};
        if(req.headers.cookie){
            const cookies = req.headers.cookie.replaceAll(" ","").split(";");
            for (const cookie of cookies) {
                const [key,value] = cookie.replace("=",":").split(":");
                req.cookies[key] = value;
            }

            // req.cookies = JSON.parse(
            //     "{\""+req.headers.cookie.replace(";","\"").replace(" ","\"")+"\"}"
            // );
            req.auth = await app.services.auth.checkLogin(req.cookies.token);
            
        }
        // sessions 
        // cookies 
        return req;
    } catch (error) {
        error.code = "bad-headers";
        throw error;
    }
}



module.exports = requestPreProcess