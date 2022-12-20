const qs = require('querystring');

function fetchParamsFromBody(req,res,next){
    try {
      let body = '';
      req.on('data',(chunk)=>{
        body += chunk;
      });
      req.on('end',(async ()=>{
        const params = {...qs.parse(body?body:{})};
        req.params = JSON.parse(Object.keys(params)[0]);
        next();
      }));
    } catch (error) {
      error.code = "bad-input";
      throw error;
    }
   


}



module.exports = fetchParamsFromBody;
