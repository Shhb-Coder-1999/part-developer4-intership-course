const {config} = require("../");

function checkOrigin(req,res,next){
    try {
        if(config.frontServer.hostname!='*' && ( req.headers.origin != config.frontServer.hostname)){
            const e = new Error("cors error");
            e.code = 'origin';
            throw e;
        };
        next();
    } catch (error) {
        error.code = error.code|"bad-input";
        throw error;
    }
   
}


module.exports = checkOrigin;