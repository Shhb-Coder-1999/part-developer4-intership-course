const Ajv = require("ajv");
const ajv = new Ajv({allErrors:true});

async function addToPlaylist(req,res,next){

    const addToPlaylistSchema ={
        type:"object",
        properties:{
            "songs":{
                type:"array",
                items:{type: "string"}
            }
        },
        required:["songs"],
        additionalProperties: false,
    }
    try{

        let valid = ajv.validate(addToPlaylistSchema,req.params)
        if (!valid){
            throw new Error(JSON.parse(ajv.errors))
        }
        return req;
    }
    catch(err){
        err.code ='bad-input';
        throw err
    }

        
    
}


module.exports = addToPlaylist;