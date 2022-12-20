const playlistController = require("./controllers/playlist.controller");
const createPlaylistValidation = require("./middlewares/createPlaylistValidation");
const editPlaylistValidation = require("./middlewares/editPlaylistValidation");
const addToPlaylist = require('./middlewares/addToPlaylist');
const {fetchQueryStringFromURL,fetchFromParams, auth, aclWrapper} = require('../../middlewares/');
const { app } = require("../..");
const PlaylistModel = require("./models/playlist.model");

app.router.group('playlists',()=>{
  app.router.addRoute("/@",playlistController.getPlaylist,"GET").middleware([auth,aclWrapper(PlaylistModel,'user_id'),fetchQueryStringFromURL]);
  app.router.addRoute("/create",playlistController.createPlaylist,"POST").middleware([auth,createPlaylistValidation]);
  app.router.addRoute("/@",playlistController.deletePlaylist,"DELETE").middleware([auth,aclWrapper(PlaylistModel,'user_id'),fetchQueryStringFromURL])
  app.router.addRoute("/@",playlistController.editPlaylist,"PUT").middleware([auth,aclWrapper(PlaylistModel,'user_id'),editPlaylistValidation,fetchQueryStringFromURL])
  app.router.addRoute("/@",playlistController.addToPlaylist,"POST").middleware([auth,aclWrapper(PlaylistModel,'user_id'),fetchFromParams,addToPlaylist]);
  app.router.addRoute("/@/musics",playlistController.songsOfPlaylist,"GET").middleware([fetchQueryStringFromURL,auth]);
  app.router.addRoute("/@/musics/@",playlistController.deleteSongOfPlaylist,"DELETE").middleware([fetchQueryStringFromURL]);
  



})
   
 






