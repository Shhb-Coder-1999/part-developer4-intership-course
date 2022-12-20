
async function auth(req,res,next){

    try {

      if(!req.auth)throw new Error()
      next();
    } catch (error) {
        error.code = '401'
        throw error;
    }
  
};
    
     
  



module.exports = auth;
