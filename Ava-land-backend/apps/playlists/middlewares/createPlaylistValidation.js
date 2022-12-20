const Ajv = require("ajv");
const ajv = new Ajv({allErrors:true});

const {app} = require('../../../');

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
    const fieldsSchema ={
        type:"object",
        properties:{
            "playlist":{
                type:"string",
                minLength: 1
            },
            "songs":{
                type:"string"
            }
        },
        required:["playlist","songs"],
        additionalProperties: false,
    }
    try{
        //file validation;
        req = await app.storage.saveHttpFile(req,'playlist');

        let valid = ajv.validate(fileSchema,req.files)
        if (!valid){
            throw new Error(JSON.parse(ajv.errors))
        }

        //props validation
        valid = ajv.validate(fieldsSchema,req.fields);
        if (!valid){
            throw new Error(JSON.parse(valid.errors))
        }
        return req;
    }
    catch(err){
        err.code ='form-data';
        try {
            await app.storage.delete('playlist',
                req.files['cover'].newFilename.split('.')[0],
                '.'+req.files['cover'].newFilename.split('.')[1]
                )
            
        }catch (err) {
            throw err;
        }
        throw err
    }

        
    
}


module.exports = createPlaylistValidation;