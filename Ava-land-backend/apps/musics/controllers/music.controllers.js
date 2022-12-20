const path = require('path');
const { app } = require('../../..');
const { root,storage } = require('../../../config');
const MusicRepository = require("../repositories/music.repository");
const { readRangeHeader, getMimeNameFromExt } = require("../../../utils/helper");
const MusicModel = require('../models/music.model');
const musicRepository = new MusicRepository();

async function createMusic(req,res,queryParams) {
  if(!req.files.cover){
    req.files.cover = {
      filepath:storage.root+path.sep+'default.png'
    }
  }
  let music = await musicRepository.create(req.fields, req.files, req.auth.id);

  res.response(JSON.stringify(music[0]));
}

async function getMusic(req,res,queryParams) {
  let music = null;
  if (!queryParams[0]) {
    music = await musicRepository.fetchAll(req.auth?.id);
    res.response(JSON.stringify(music));
    return;
  } 
  music = await musicRepository.fetch(queryParams[0],req.auth?.id);
  res.response(JSON.stringify(music[0]));

}
async function similarMusic(req,res,queryParams) {
  let music = await musicRepository.fetch(queryParams[0]);
  music = await musicRepository.similar(music[0].artist,queryParams[0]);
  res.response(JSON.stringify(music));
}
async function next(req,res,queryParams) {
  let music = await musicRepository.fetch(queryParams[0]);
  music = await musicRepository.similar(music[0].artist,queryParams[0]);
  res.response(JSON.stringify(music[0]));
}

async function deleteMusic(req,res,queryParams){
  let result = await musicRepository.delete(queryParams[0]);
  result = {
    message: "deleted successfully"
  }
  res.response(JSON.stringify(result));
}

async function editMusic(req,res,queryParams){
  if(!req.files.cover){
    req.files.cover = {
      filepath:storage.root+path.sep+'default.png'
    }
  }
  let result = await musicRepository.update(req.fields, req.files,queryParams[0]);
  res.response(JSON.stringify(result[0]));
}

async function play(req,res,queryParams){
if(!req.headers.range){
    const e = new Error();
    e.code = "bad-input-range"
    throw e;
  }
  let [start,end] = readRangeHeader(req.headers.range);

  const result = await musicRepository.fetch(queryParams[0]);

  const _path = result[0].path;//temp

  const stat = app.storage.stat(_path);
  let filesize = stat.size;

  // await musicRepository.log(queryParams[0],req.auth.id); history
  res.type('pipe-file');

  if (start == null && end == null) {
        
    res.setHeader('Content-Length', filesize);
    res.setHeader('Content-Type', getMimeNameFromExt(path.extname(_path)));
    res.response({
      _path,
      options:{}
    });

  }
  if (start >= filesize || end >= filesize) {
    res.setHeader('Content-Range', 'bytes ' + '*' + '/' +
    filesize);
    const e =new Error('invalid range');
    e.code = 419;
    throw e;
  }

  res.setHeader('Content-Range', 'bytes ' + start + '-' + end + '/' +
  filesize);
  res.setHeader('Content-Length', end-start>0 ? end-start :filesize);
  res.setHeader('Content-Type', getMimeNameFromExt(path.extname(_path)))
  res.setHeader('Accept-Ranges', 'bytes');
  res.setHeader('Cache-Control', 'no-cache');
  res.response({
    _path,
    options:{
      start:Number(start),
      end:Number(end)?Number(end):undefined
    }
  });


}

module.exports = {
  deleteMusic,
  createMusic,
  getMusic,
  similarMusic,
  editMusic,
  play,
  next
};
