const EventEmitter = require("events");
const fs = require("fs");
const Server = require("./modules/server");
const Router = require("./modules/router/router");

const {
  getPostData,
  fetchQueryStringFromURL,
} = require("./modules/parser/parser");

const config = require("./config");

const server = new Server(config.serverConfig);
const eventEmitter = new EventEmitter();
const router = new Router(eventEmitter, config.routerConfig.eventName);

const app = require("./apps/products");
app.routes.forEach((route) => {
  const middleware = [fetchQueryStringFromURL, getPostData];
  if (route.middlewares.length != 0) {
    for (let item of route.middlewares) {
      console.log(item);
      middleware.push(item);
    }
  }

  // console.log(middleware);

  router
    .addRoute(`/products/${route.url}`, route.controller, route.method)
    .middleware(middleware);
});

server.start(eventEmitter);
