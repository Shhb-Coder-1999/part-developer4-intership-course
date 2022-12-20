const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true });
const {app} = require("../../..");

const fileSchema = {
  type: "object",

  properties: {
    cover: {
      type: "object",
      properties: {
        mimetype: {
          enum: ["image/jpeg", "image/png"],
        },

        size: {
          type: "number",
          // maximum: 120000,
        },
      },
      required: ["size", "mimetype"],
    },
  },
  additionalProperties: false,
};

const fieldsSchema = {
  type: "object",
  properties: {
    description: {
      type: "string",
    },
    name: {
      type: "string",
      minLength: 2,
    },
    album: {
      type: "string",
    },
    artist: {
      type: "string",
    },
    duration: {
      type: "string",
    }
  },
  required:['duration','artist','album','name','description'],
  additionalProperties: false,
};

async function editMusicValidation(req, res, next) {
  try {
    req = await app.storage.saveHttpFile(req, "music");
    // req = await storage.saveHttpFile(req, "coverImg");

    const validFiles = ajv.validate(fileSchema, req.files);
    const validFields = ajv.validate(fieldsSchema, req.fields);

    if (!validFiles || !validFields)
      throw new Error(JSON.stringify(ajv.errors));
    return req;
  } catch (e) {
  
    await app.storage.delete(
      "music",
      req.files["cover"].newFilename.split(".")[0],
      "." + req.files["cover"].newFilename.split(".")[1]
    );

    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "oops! Something went wrong!",
        addtionalInfo: JSON.parse(e.message),
      })
    );
  }
}

module.exports = editMusicValidation;
