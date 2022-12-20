const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

const loginSchema = {
  type: "object",
  properties: {
    user: {
      type: "string",
    },
    password: {
      type: "string",
      minLength: 7,
    }
  },
  required: ['user','password'],
  additionalProperties: false,
};

async function loginValidation(req,res,next){

    try {
      const logValidation = ajv.validate(loginSchema, req.params);

      if (!logValidation)
        throw new Error(JSON.stringify(ajv.errors));

        next() ;

    } catch (error) {
        error.code = 'bad-input'
        throw error;
    }
  
};
    
     
  



module.exports = loginValidation;
