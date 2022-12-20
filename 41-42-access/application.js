const Router = require('./modules/router');
const Server = require('./modules/server');
const Redis = require('redis');
const {fetchDataFromBody,authorize} = require('./middlewares');
const Auth = require('./auth');
const eventEmitter = require('eventemitter3');
const EE = new eventEmitter();

class Application{
    
    static #application = null;
    constructor(config){
        if(!Application.#application){
            const redis = Redis.createClient(config.Redis.Client);
            redis.connect();
            redis.select(config.Redis.selectDB)
            Application.#application = {
                router:new Router(EE,config.server.eventName),
                server:new Server(config.server),
                redis,
                auth:new Auth(config.privateKey,redis),
                middlewares:{
                    fetchDataFromBody,
                    authorize
                },
                appEmitter:EE
            }
        }
        return Application.#application;
    }

}
module.exports = Application;