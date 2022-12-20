const { app,config } = require("../..");

app.router.addRoute("/@",(req,res,queryParams)=>{
    res.setHeader("Host","localhost:8000");

    res.setHeader("Access-Control-Allow-Origin",config.frontServer.hostname);
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, PATCH, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cookie");
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Accept", "*");

    res.response(JSON.stringify({}));
},"OPTIONS")
