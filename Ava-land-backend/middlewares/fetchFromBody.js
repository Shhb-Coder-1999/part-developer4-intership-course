
async function fetchFromBody(req,res,next){

  try {
    let body = '';
    req.on('data',(chunk)=>{
      body += chunk;
    });
    req.on('end',(async ()=>{
      
      req.body =  JSON.parse(body);
      return req;

    }).catch((error)=>{
      error.code = "bad-input";
      throw error;
    }));
  } catch (error) {
    error.code = "bad-input";
      throw error;
  }
    

    
}



module.exports = fetchFromBody;
