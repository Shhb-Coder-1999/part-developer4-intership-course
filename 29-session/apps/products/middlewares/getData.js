const formidable = require("formidable");

async function getData(req, res, next) {
  try {
    let form = formidable({ keepExtensions: true });

    if (
      req.headers["content-type"] == "application/json" ||
      req.headers["content-type"] == "application/x-www-form-urlencoded"
    )
      return req;
    return new Promise((resolve, reject) => {
      form.parse(req, function (err, fields, files) {
        if (err) {
          return;
        }

        req.fields = fields;
        req.files = files;

        resolve(req);
      });
    });
  } catch (e) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "oops! Something went wrong!",
        addtionalInfo: e.message,
      })
    );
  }
}

module.exports = getData;
