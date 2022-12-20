
function errorHandler(req,res,e){
    const Errors = {
        '404':()=>{
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message:"Page not found"
            }));
        },
        '401':()=>{
            
            res.writeHead(401, { 
                "Content-Type": "application/json",
                'Access-Control-Allow-Credentials':true
            });
            res.end(JSON.stringify({
                message:"Unauthorize request"
            }));
        },
        '419':()=>{
            res.writeHead(419, { "Content-Type": "application/json" });
            res.end(
            JSON.stringify({
                message: e.message,
            }))
        },
        '422':()=>{
            res.writeHead(422, { "Content-Type": "application/json" });
            res.end(
            JSON.stringify({
                message: "your ip is hide or unaccessible",
            }))
        },
        '429':()=>{
            res.writeHead(429, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message:"Too many request"
            }));
        },
        '500':()=>{
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message:"Internal server error"
            }));
        },
        'cors':()=>{
            res.writeHead(403, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message:"forbidden request - cors error"
            }));
        },
        'database':()=>{
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message:"Internal server error - models"
            }));
        },
        'auth-database':()=>{
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message:"Internal server error - redis"
            }));
        },
        'auth-database-cookie':()=>{
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message:"Internal server error - cookies system"
            }));
        },
        'login-credential':()=>{
            res.writeHead(401, {
                "Content-Type": "application/json" ,
                'Access-Control-Allow-Credentials':true
            });
            res.end(JSON.stringify({
                message:"user or password is wrong"
            }));
        },
        'forget-password':()=>{
            res.writeHead(401, {
                "Content-Type": "application/json" ,
                'Access-Control-Allow-Credentials':true
            });
            res.end(JSON.stringify({
                message:"question or answer is wrong"
            }));
        },
        'reset-password':()=>{
            res.writeHead(401, {
                "Content-Type": "application/json" ,
                'Access-Control-Allow-Credentials':true
            });
            res.end(JSON.stringify({
                message:"question or answer is wrong"
            }));
        },
        'bad-input':()=>{
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message:"input filled in bad way"
            }));
        },
        'bad-input-range':()=>{
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message:"need to start and end header range"
            }));
        },
        'bad-query-string':()=>{
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message:"bad-query-string"
            }));
        },
        'form-data':()=>{
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message:"bad form data input"
            }));
        },
        'unique-param':()=>{
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message:"user is already used"
            }));
        },
        'origin':()=>{
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(
            JSON.stringify({
                message: `header origin must be set and equal with ${config.fontServer.hostname}`,
            }))
        },
        'bad-headers':()=>{
            res.writeHead(400, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                message:"bad request - bad ip or cookie setted"
            }));
        },
        'default':()=>{
            res.writeHead(500, { "Content-Type": "application/json" });
            res.end(JSON.stringify(e.message));
        }

    }    
    if(!(e.code in Errors)){
        Errors['default']();
        return;
    }
    Errors[e.code]();
};
module.exports = errorHandler;
