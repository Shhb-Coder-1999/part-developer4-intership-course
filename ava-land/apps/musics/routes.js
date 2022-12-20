const validation = require("./middlewares/validation");
const musicController = require("./controllers/music.controllers");
const likeController = require("./controllers/like.controller");
const {fetchQueryStringFromURL} = require('../../middlewares/');

const routes = [
  {
    url: "like",
    method: "PATCH",
    handler: likeController.likeOrDislike,
    middlewares: [fetchQueryStringFromURL],
  },
  {
    url: "",
    method: "GET",
    handler: musicController.getMusic,
    middlewares: [fetchQueryStringFromURL],
  },

  {
    url: "upload",
    method: "POST",
    handler: musicController.createMusic,
    middlewares: [validation],
  },
];

module.exports = routes;
