const Ajv = require("ajv");
const ajv = new Ajv({ allErrors: true });
const {app} = require("../../..");

const fileSchema = {
  type: "object",

  properties: {
    song: {
      type: "object",
      properties: {
        mimetype: {
          enum: [
            "audio/basic",
            "auido/L24",
            "audio/mid",
            "audio/mpeg",
            "audio/mp4",
            "audio/x-aiff",
            "audio/x-mpegurl",
            "audio/vnd.rn-realaudio",
            "audio/ogg",
            "audio/vorbis",
            "audio/vnd.wav",
          ],
        },

        size: {
          type: "number",
          // minimum: 10000,
          // maximum: 500000,
        },
      },

      required: ["size", "mimetype"],
    },

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
  required: ['song'],
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

async function uploadMusicValidation(req, res, next) {
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
      req.files["song"].newFilename.split(".")[0],
      "." + req.files["song"].newFilename.split(".")[1]
    );

    await app.storage.delete(
      "music",
      req.files["cover"].newFilename.split(".")[0],
      "." + req.files["cover"].newFilename.split(".")[1]
    );

    e.code = "bad-input";
    throw e;
  }
}

module.exports = uploadMusicValidation;
