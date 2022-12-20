const {app} = require('../../');
const userController = require('./controllers/user.controller');
const likeListController = require('./controllers/likeList.controller');

const middlewares = require('../../middlewares');
const authLimiter = require('./middlewares/authlimiter');
const signupValidation = require('./middlewares/signupValidation');
const loginValidation = require('./middlewares/loginValidation');


app.router.group('users',()=>{
    
    app.router.addRoute('/login',userController.login,'POST').middleware([authLimiter,middlewares.fetchFromParams,loginValidation]);
    app.router.addRoute('/signup',userController.signup,'POST').middleware([authLimiter,middlewares.fetchFromParams,signupValidation]);
    app.router.addRoute('/forgetpassword',userController.forgetPassword,'POST').middleware([authLimiter,middlewares.fetchFromParams]);
    app.router.addRoute('/resetpassword',userController.resetPassword,'POST').middleware([authLimiter,middlewares.fetchFromParams]);

    app.router.addRoute('/checklogin',userController.checkLogin,'GET').middleware([authLimiter,loginValidation,middlewares.auth,middlewares.fetchFromParams]);

    app.router.addRoute('/likes',likeListController.getlikes,'GET').middleware([middlewares.auth,middlewares.auth]);

})