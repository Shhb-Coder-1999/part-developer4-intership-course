const fs = require("fs");
const path = require("path");
const os = require("os");
const formidable = require("formidable");

class Storage {
  constructor(config) {
    this.root = config.root;
  }

  saveHttpFile(incoming_request, dirName) {
    let form = formidable({
      keepExtensions: true,
      uploadDir: this.root + path.sep + dirName,
    });
    return new Promise((resolve, reject) => {
      form.parse(incoming_request, function (err, fields, files) {
        if (err) throw new Error(err);

        incoming_request.fields = fields;
        incoming_request.files = files;

        resolve(incoming_request);
      });
    });
  }

  delete(dirName, fileName, ext) {
    return new Promise((resolve, reject) => {
      fs.unlink(
        this.root + path.sep + dirName + path.sep + fileName + ext,
        (err) => {
          if (err) {
            reject(err);
          }
          resolve(true);
        }
      );
    });
  }

  save(data, dirName, ext = ".txt", name = String(Date.now()) + ext) {
    return new Promise((resolve) => {
      fs.writeFile(
        `${this.root}${path.sep}${dirName}${path.sep}${name}`,
        data,
        (err) => {
          if (err) throw new Error(err);
          else resolve(`${dirName}${name}`);
        }
      );
    });
  }
  pipeStream(_path, writeableStream) {
    return new Promise((resolve) => {
      _path = this.preProcesses(_path);
      const readable = fs.createReadStream(_path);
      readable.pipe(writeableStream);
      writeableStream.on("finish", () => {
        resolve(writeableStream);
      });
    });
  }
  preProcesses(_path) {
    if (os.platform != "win32") _path = _path.replaceAll("/", path.sep);
    let mainPath = `${this.root}${_path}`;
    if (!fs.existsSync(mainPath)) {
      throw new Error("No such file or directory");
    }
    return mainPath;
  }
  read(_path) {
    _path = this.preProcesses(_path);
    return new Promise((resolve) => {
      fs.readFile(_path, "utf8", (err, data) => {
        if (err) {
          throw new Error(err);
        }
        resolve(data);
      });
    });
  }
}

module.exports = Storage;
