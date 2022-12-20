const { app } = require("../..");
const uploadMusicValidation = require("./middlewares/uploadMusicValidation");
const editMusicValidation = require('./middlewares/editMusicValidation');
const {fetchQueryStringFromURL, auth, aclWrapper} = require('../../middlewares/');
const musicController = require("./controllers/music.controllers");
const likeController = require("./controllers/like.controller");
const MusicModel = require("./models/music.model");

app.router.group('musics',()=>{
  
  app.router.addRoute("/@/like",likeController.likeOrDislike,"PATCH").middleware([fetchQueryStringFromURL,auth]);
  app.router.addRoute("/upload",musicController.createMusic,"POST").middleware([auth,uploadMusicValidation]);
  app.router.addRoute("/@",musicController.editMusic,"PUT").middleware([auth,aclWrapper(MusicModel,'producer_id'),editMusicValidation,fetchQueryStringFromURL]);
  app.router.addRoute("/@",musicController.deleteMusic,"DELETE").middleware([auth,aclWrapper(MusicModel,'producer_id'),fetchQueryStringFromURL]);
  app.router.addRoute("/@/play",musicController.play,"GET").middleware([fetchQueryStringFromURL]);
  app.router.addRoute("/@",musicController.getMusic,"GET").middleware([fetchQueryStringFromURL]);
  app.router.addRoute("/@/similars",musicController.similarMusic,"GET").middleware([fetchQueryStringFromURL]);
  app.router.addRoute("/@/next",musicController.next,"GET").middleware([fetchQueryStringFromURL]);

})