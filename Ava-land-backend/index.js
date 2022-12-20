const {brogrammers} = require('brogrammers');
const { LoggerFacade } = require('brogrammers_logger');
const EE = require('eventemitter3');

const Postgres = require('./database/postgres');
const config = require('./config');
const Services = require('./services/');
const eventEmitter = new EE();
const responseHandler = require('./Handlers/responseHandler/responseHandler');
const errorHandler = require('./Handlers/errorHandler/errorHandler');

const app = new brogrammers(eventEmitter,Postgres,config,responseHandler,errorHandler);

app.use('logger',new LoggerFacade({driver:"file",filePath:config.root+'/log.txt'}));

module.exports = {
    eventEmitter,
    app,
    config
}

const {requestPreProcess,rateLimit,cors, checkOrigin}= require('./middlewares/');
require('./Handlers/log/');

const userModel = require('./apps/users/models/user.model');

app.use('auth',new Services.Auth(userModel,
async (model,credential,hash)=>{
    model = new model();
    try {
        let result = model.response(await model.insert([
            credential.user,
            hash(credential.password),
            credential.question,
            credential.answer,
            Date.now(),
            null
        ]));
        if(!result.length){
            throw new Error();
        }
        return result[0];
    } catch (error) {
        error.code = 'unique-param';
        throw error;
    }

   
    
},
async (model,credential,hash)=>{
    model = new model();
    const result = model.response(await model.select(['*']).where('"username"=? AND "pass"=?',[
        credential.user,
        hash(credential.password)
    ]).execute());

    if(!result.length){
        throw new Error();
    }
    return result;
},
async (model,credential,hash)=>{
    model = new model();
    const result = await model.select(['*']).where('"username"=? AND "quest"=? AND "ans"=?',[
        credential.user,
        credential.question,
        credential.answer
    ]).execute();

    if(!result.length){
        throw new Error();
    }
    return result;
},
async (model,credential,hash)=>{
    model = new model();
    const result = await model.update(Object.values({
        newPassword:hash(credential.password),
        updated_at:Date.now()
    }),[
        "pass",
        "updated_at"
    ]).where("id=?",[credential.id]).execute(true);

    if(!result.length){
        throw new Error();
    }
    const mdl = await model.response(result);
    return mdl;
}));

app.server.middlewares.push(cors({
    origin: config.frontServer.hostname,
    optionsSuccessStatus: 200 ,
    credentials: true,
    preflightContinue: true
}));
app.server.middlewares.push(checkOrigin)
app.server.middlewares.push(requestPreProcess)
app.server.middlewares.push(rateLimit);

app.serve();




