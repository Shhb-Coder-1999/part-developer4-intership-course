const EventEmitter = require("events");
const fs = require("fs");
const Server = require("./modules/server");
const Router = require("./modules/router/router");
const Storage = require("brogrammers_storage");
const { DB } = require("./database/");

const config = require("./config");
const storage = new Storage({ root: config.storagePath });
const db = new DB(config.databaseConfig);
module.exports = {
  DB: db,
  storage,
  root: config.root,
};
const server = new Server(config.serverConfig);
const eventEmitter = new EventEmitter();
const router = new Router(eventEmitter, config.routerConfig.eventName);

const appsDirectories = fs.readdirSync(config.appsDirectoriesPath);

for (let appDir of appsDirectories) {
  const app = require(`./${config.appsDirectoriesPath}/${appDir}`);
  app.routes.forEach((route) => {
    router
      .addRoute(`/${appDir}/${route.url}`, route.handler, route.method)
      .middleware(route.middlewares)
      .middleware([]);
  });
}

server.start(eventEmitter);
