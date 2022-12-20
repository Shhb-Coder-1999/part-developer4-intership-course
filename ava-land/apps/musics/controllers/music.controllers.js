const MusicRepository = require("../repositories/music.repository");
const musicRepository = new MusicRepository();

async function createMusic(req, res) {
  try {
    const music = await musicRepository.create(req.fields, req.files);
    res.writeHead(200, { "Content-Type": "applicationdata/json" });
    res.end(JSON.stringify(music));
  } catch (error) {
    console.log(error);
  }
}

async function getMusic(req, res) {
  try {
    let music = null;
    if (!req.querystring?.id) {
      music = await musicRepository.fetchAll();
    } else {
      music = await musicRepository.fetch(req.querystring.id);
    }
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(JSON.stringify(music));
  } catch (error) {
    res.writeHead(500, { "Content-type": "application/json" });
    res.end("something went wrong :" + error.message);
  }
}

module.exports = {
  createMusic,
  getMusic,
};
