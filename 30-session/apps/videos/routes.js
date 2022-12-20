const videoController = require("./controller/videoController");

const routes = [
  {
    url: "",
    method: "GET",
    controller: videoController.sendVideo,
    middlewares: [],
  },

  {
    url: "range.html",
    method: "GET",
    controller: videoController.uploadHtml,
    middlewares: [],
  },
];

module.exports = routes;
