

function responseHandler(req,res){
    const responses = {
        'image/svg':()=>{
            res.writeHead(res.status, { "Content-Type": res.type });
            res.end(res.response);
        },
        'pipe-file':()=>{
            try {
                const { app } = require("../..");
                app.storage.pipeStream(res.response,res);
            } catch (error) {
                error.code = 'not-exist'
                throw error;
            }
        },
        'default':()=>{
            res.writeHead(res.status, { "Content-Type": "application/json" });
            res.end(res.response);
        }

    }    
    if(!(res.type in responses)){
        responses['default']();
    }
    responses[res.type]();
    return;
}

module.exports = responseHandler;

