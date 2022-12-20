const app = require('../..');
const authController = require('./controller/auth.contorller');

const users = require('../../database/db');

function getusers(req,res){
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(users));
}

app.router.addRoute('/login',authController.login,'post').middleware([app.middlewares.fetchDataFromBody]);
app.router.addRoute('/signup',authController.signup,'post').middleware([app.middlewares.fetchDataFromBody]);
app.router.addRoute('/users',getusers,'get').middleware([app.middlewares.authorize]);


