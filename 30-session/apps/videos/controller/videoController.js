const path = require("path");
const filename =
  __dirname + path.sep + ".." + path.sep + "data" + path.sep + "video.mp4";
const viewDir =
  __dirname + path.sep + ".." + path.sep + "views" + path.sep + "range.html";
const { createReadStream } = require("fs");
const fs = require("fs");
const fsPromises = require("fs").promises;

function uploadHtml(req, res) {
  if (!fs.existsSync(viewDir)) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "FILE NOT FOUND!" }));
  } else {
    fs.readFile(viewDir, function (err, html) {
      if (err) {
        throw err;
      }
      res.end(html);
    });
  }
}

async function sendVideo(req, res) {
  if (!fs.existsSync(filename)) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Not Found!" }));
    return;
  }
  const range = req.headers.range;
  const stats = await fsPromises.stat(filename);
  const size = stats.size;

  if (range) {
    let [start, end] = range.replace(/bytes=/, "").split("-");
    start = parseInt(start, 10);
    end = end ? parseInt(end, 10) : size - 1;

    if (start >= size || end >= size) {
      res.writeHead(416, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Range Not Satisfiable" }));
    }

    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${size}`,
      "Accept-Ranges": "bytes",
      "Content-Length": start == end ? 0 : start - end + 1,
      "Content-Type": getMimeNameFromExt(path.extname(viewDir)),
      "Cache-Control": "no-cache",
    });

    createReadStream(filename, { start, end }).pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Length": size,
      "Content-Type": getMimeNameFromExt(path.extname(viewDir)),
    });
    createReadStream(viewDir).pipe(res);
  }
}

function getMimeNameFromExt(ext) {
  let mimeNames = {
    ".css": "text/css",
    ".html": "text/html",
    ".js": "application/javascript",
    ".mp3": "audio/mpeg",
    ".mp4": "video/mp4",
    ".ogg": "application/ogg",
    ".ogv": "video/ogg",
    ".oga": "audio/ogg",
    ".txt": "text/plain",
    ".wav": "audio/x-wav",
    ".webm": "video/webm",
  };
  let result = mimeNames[ext.toLowerCase()];
  if (result == null) result = "application/octet-stream";
  return result;
}

module.exports = {
  sendVideo,
  uploadHtml,
};
