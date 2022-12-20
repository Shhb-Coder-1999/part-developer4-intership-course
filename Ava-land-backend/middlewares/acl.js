


function aclWrapper(Model,key){
    const aclMiddleware = async (req,res,next)=>{
        try {
            if(req.routerParams[0]){
                const model = new Model();
                const row = await model.select([key]).where("id=?",[ req.routerParams[0]]).execute();
                if (req.auth.id != row[0][key]){
                    throw new Error()
                }
            }
            next();
        }
        catch(error){
            error.code = "401";
            throw error;
        }
    }
    return aclMiddleware;
}

module.exports = aclWrapper;