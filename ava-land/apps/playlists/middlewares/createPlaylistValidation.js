const Ajv = require("ajv");
const {storage} = require('../../../');

async function createPlaylistValidation(req,res,next){
    const fileSchema = {
        type:"object",
        properties:{
            cover:{
                type:"object",
                properties:{
                    'mimetype':{enum:[
                        "image/jpeg",
                        "image/jpg",
                        "image/png"

                    ]},
                    'size':{
                        type:"number",
                        maximum:120000
                    }
                },
                required:['size','mimetype']
            } 
        },
        additionalProperties: false,
    }
    const ajv = new Ajv({allErrors:true});
    try{
        //file validation;
        req = await storage.saveHttpFile(req,'playlist');

        let valid = ajv.validate(fileSchema,req.files)
        if (!valid){
            throw new Error(JSON.parse(ajv.errors))
        }
        const fieldsSchema ={
            type:"object",
            properties:{
                "playlistName":{
                    type:"string",
                    minLength: 1
                }
            },
            required:["playlistName"],
            additionalProperties: false,
        }
        //props validation
        valid = ajv.validate(fieldsSchema,req.fields);
        if (!valid){
            throw new Error(JSON.parse(valid.errors))
        }
        return req;
    }
    catch(err){
        try {
            await storage.delete('playlist',
                req.files['cover'].newFilename.split('.')[0],
                '.'+req.files['cover'].newFilename.split('.')[1]
                )
            res.writeHead(400, { "Content-Type": "application/json" });

            res.end(
              JSON.stringify({
                message: "oops! Something went wrong!",
                addtionalInfo: JSON.parse(err.message),
              })
            );
        }catch (err) {

            res.writeHead(400, { "Content-Type": "application/json" });

            res.end(
                JSON.stringify({
                    message: "oops! Something went wrong!",
                    addtionalInfo: JSON.parse(err.message),
                })
            );
        }
           
    }

        
    
}


module.exports = createPlaylistValidation;