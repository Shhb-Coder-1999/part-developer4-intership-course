const Ajv = require('ajv');
const ajv = new Ajv({ allErrors: true });

const signupSchema = {
  type: "object",
  properties: {
    user: {
      type: "string",
    },
    password: {
      type: "string",
      minLength: 7,
    },
    confirmation: {
      type: "string",
      minLength: 7,
    },
    question: {
      type: "string",
      enum:[
        'nickname',
        'firstCarName',
        'schoolName'
      ]
    },
    answer: {
      type:"string"
    }
  },
  required: ['answer','question','user','password','confirmation'],
  additionalProperties: false,
};

async function signupValidation(req,res,next){

    try {
      const signValidation = ajv.validate(signupSchema, req.params);

      if (!signValidation)
        throw new Error(JSON.stringify(ajv.errors));

        next() ;
    } catch (error) {
        error.code = 'bad-input'
        throw error;
    }
  
};
    
     
  



module.exports = signupValidation;
