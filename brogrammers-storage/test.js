const Storage = require(".");
const path = require("path");
const storage = new Storage({ root: __dirname + path.sep + "storage" });
const fs = require("fs");
const { Server, Router } = require("httppartserver-avaland");

async function read(_path) {
  try {
    const file = await storage.read(_path);
    console.log(file);
  } catch (error) {
    console.log(error);
  }
}

async function readStream(_path) {
  try {
    const writeableStream = fs.createWriteStream(
      __dirname + "/storage/music/test.mp3"
    );
    const writable = await storage.pipeStream(_path, writeableStream);
    console.log(writable);
  } catch (error) {
    console.log(error);
  }
}

const server = new Server({ port: "8000", hostname: "localhost" });

const router = new Router();
server.start(router);

async function testSave(data, dirame, ext) {
  await storage.save(data, dirame, ext);
}
testSave(JSON.stringify({ name: "shhb" }), "music", ".json");

read("/music/file.txt");
readStream("/music/lofi.mp3");

router.addRoute(
  "",
  async (req, res) => {
    let result = await storage.saveHttpFile(req, "music");
  },
  "POST"
);

storage.delete("music", "1661756898534", ".json");
