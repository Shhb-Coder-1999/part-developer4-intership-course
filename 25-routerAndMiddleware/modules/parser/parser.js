const parseQuery = require("my_query_string_parser");
const qs = require("querystring");

function fetchQueryStringFromURL(req, res, next) {
  try {
    req.params = parseQuery(req.url);
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
    console.log(req.method != "POST");
    return new Promise((resolve, reject) => {
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
        req.data = { ...qs.parse(data) };
        console.log("req.data : ", req.data);
        resolve(req.data);
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

module.exports = { getPostData, fetchQueryStringFromURL };
