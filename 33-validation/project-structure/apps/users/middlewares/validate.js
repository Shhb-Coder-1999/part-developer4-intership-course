const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true });
const addFormats = require("ajv-formats");
require("ajv-errors")(ajv);
addFormats(ajv);
ajv.addFormat("onlyNum", /^[0-9]*$/);
ajv.addFormat(
  "email",
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
ajv.addFormat("password", /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/);
ajv.addFormat("username", /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/);

const schema = {
  type: "object",
  properties: {
    id: {
      type: ["string", "integer"],
      pattern: "^[1-9][0-9]*$",
      minimum: 1,
    },
    firstname: { type: "string", maxLength: 50, minLength: 2 },
    lastname: { type: "string", maxLength: 50, minLength: 2 },
    imageUrl: {
      type: "string",
      format: "uri",
    },

    nationalCode: {
      type: "string",
      maxLength: 10,
      minLength: 10,
      format: "onlyNum",
    },

    mobileNum: {
      type: "string",
      maxLength: 11,
      minLength: 11,
      format: "onlyNum",
    },

    email: {
      type: "string",
      format: "email",
    },

    gender: {
      enum: ["male", "female"],
    },

    isForeign: {
      enum: [true, false],
    },

    username: {
      type: "string",
      minLength: 3,
      format: "username",
    },

    password: {
      type: "string",
      minLength: 8,
      format: "password",
    },
  },
  required: ["id", "firstname", "lastname", "imageUrl"],
  errorMessage: {
    properties: {
      id: "positive integer or string of digits",
      nationalCode: "only 10 digits !",
      mobileNum: "only 11 digits !",
      email: "valid example : shahabs789@gmail.com",
      gender: "only Allow select one option between male/female",
      isForeign: "only Allow boolean expressions of true/false",
      username:
        "Minimum 3 characters, at least one uppercase letter, one lowercase letter and one number",
      password:
        "Minimum 8 characters, at least one uppercase letter, one lowercase letter and one number",
    },
  },
  additionalProperties: false,
};

module.exports = {
  validateUserModel(req, res, next) {
    try {
      const valid = ajv.validate(schema, req.body);
      if (!valid) throw new Error(JSON.stringify(ajv.errors));
      req.body.id = +req.body.id;
      return req;
    } catch (e) {
      res.writeHead(400, { "Content-Type": "application/json" });

      res.end(
        JSON.stringify({
          message: "oops! Something went wrong!",
          addtionalInfo: JSON.parse(e.message),
        })
      );
    }
  },
};
