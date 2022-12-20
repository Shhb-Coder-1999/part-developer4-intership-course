const requestEventName = "newReq";

const serverConfig = {
  port: process.env.PORT ?? 8000,
  hostname: process.env.HOST ?? "127.0.0.1",
  eventName: requestEventName,
};
const databaseConfig = {
  user: "postgres",
  password: "8698044",
  host: "localhost",
  port: 5432,
  // schema:undefined,
};
const routerConfig = {
  eventName: requestEventName,
};

const appsDirectoriesPath = "./apps";
const storagePath = "./storage";
const root = __dirname;
module.exports = {
  serverConfig,
  routerConfig,
  databaseConfig,
  appsDirectoriesPath,
  storagePath,
  root,
};
