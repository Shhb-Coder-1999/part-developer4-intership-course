const EventEmitter = require("events");
const fs = require("fs");
const Server = require("./modules/server");
const Router = require("./modules/router/router");

const {
  getPostData,
  fetchQueryStringFromURL,
  getPostDataFormUrlencoded,
} = require("./modules/parser/parser");

const config = require("./config");

const server = new Server(config.serverConfig);
const eventEmitter = new EventEmitter();
const router = new Router(eventEmitter, config.routerConfig.eventName);

const app = require("./apps/videos");
app.routes.forEach((route) => {
  const middleware = [fetchQueryStringFromURL];

  console.log(`/videos/${route.url}`);

  router
    .addRoute(`/videos/${route.url}`, route.controller, route.method)
    .middleware(middleware);
});

server.start(eventEmitter);
