const reqEventName = "newReq";

const serverConfig = {
  port: process.env.PORT || 5000,
  hostname: process.env.HOST ?? "127.0.0.1",
  eventName: reqEventName,
};

const routerConfig = {
  eventName: reqEventName,
};

module.exports = {
  serverConfig,
  routerConfig,
};
