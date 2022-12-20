const parseQuery = require("my_query_string_parser");
const qs = require("querystring");

function fetchQueryStringFromURL(req, res, next) {
  try {
    req.querystring = parseQuery(req.url);
    return req;
  } catch (e) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "oops! Something went wrong!",
        addtionalInfo: e.message,
      })
    );
  }
}

async function getPostData(req, res, next) {
  try {
    let data = null;
    console.log(req.headers["content-type"]);
    return new Promise((resolve, reject) => {
      if (req.headers["content-type"] != "application/json") resolve(req);

      let buffer = "";
      req.on("data", (chunk) => {
        buffer += chunk;
      });

      req.on("end", () => {
        try {
          data = JSON.parse(buffer);
          req.body = {};
          Object.assign(req.body, data);
          resolve(req);
        } catch (e) {
          data = buffer;
        }
      });
    });
  } catch (e) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "oops! Something went wrong!",
        addtionalInfo: e.message,
      })
    );
  }
}

async function getPostDataFormUrlencoded(req, res, next) {
  try {
    let data = null;
    return new Promise((resolve, reject) => {
      if (req.headers["content-type"] != "application/x-www-form-urlencoded")
        resolve(req);

      let buffer = "";

      req.on("data", (chunk) => {
        buffer += chunk;
      });

      req.on("end", () => {
        try {
          data = JSON.parse(buffer);
        } catch (e) {
          data = buffer;
        }
        console.log(qs.parse(data));
        result = qs.parse(data);
        req.params = { ...result };

        resolve(req);
      });
    });
  } catch (e) {
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "oops! Something went wrong!",
        addtionalInfo: e.message,
      })
    );
  }
}

module.exports = {
  getPostData,
  fetchQueryStringFromURL,
  getPostDataFormUrlencoded,
};
