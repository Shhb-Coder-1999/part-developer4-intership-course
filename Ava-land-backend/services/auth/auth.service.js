const crypto = require('crypto');
const {DB,Redis} = require('./modules/');
const config = require('./config');
const Cookie = require('brogrammers_cookie');

class Auth{
    #db;
    
    #hashWithPrivateKey(password){
        const privateKey = "this is secret key actually";
        const newPassword = password+ privateKey;
        const hash  = crypto.createHash('sha256');
        return hash.update(newPassword).digest('base64');
    };
    constructor(Model,signup,login,forgetPassword,resetPassword,databaseDriver){

        this.Model = Model;
        
        this.signupQuery = signup;
        this.loginQuery = login;
        this.forgetPasswordQuery = forgetPassword;
        this.resetPasswordQuery = resetPassword;



        this.#db = new DB(databaseDriver?databaseDriver:new Redis(config.Redis))

    };

    async checkLogin(cookie,arbitraryCookie){

        try {
            const signCookie = Cookie.getSign(cookie); 
            let sourceCookie =  arbitraryCookie? arbitraryCookie:await this.#db.get(signCookie);
            if(!arbitraryCookie){
                sourceCookie = JSON.parse(sourceCookie);
            }
            if (sourceCookie){
                return sourceCookie[0];
            }
            return false;
        } catch (error) {
            error.code = "auth-database"
            throw error;
        }
    }

    async #makeCookie(data,exp=24*60*60*1000,name="token"){

        const time = Date.now();
        try {

            const cookie = Cookie.createCookie({
                user:data.user,
                time
            },config.cookie.hostname,exp,name);

            const sign = Cookie.getSign(cookie);

            await this.#db.set(sign,JSON.stringify(data),{
                EX:exp
            });
            return cookie;
        } catch (error) {
            error.code = "auth-database-cookie"
            throw error;
        }

    }
    async login(credential){
        try {
            const detectedUser = await this.loginQuery(this.Model,credential,this.#hashWithPrivateKey);
            if(detectedUser){
                const cookie = await this.#makeCookie(detectedUser);
                return {
                    user:{
                        ...detectedUser[0]
                    },
                    cookie
                }
            }
        } catch (error) {
            error.code = "login-credential";
            error.message = "user or password is wrong"
            throw error;
        }
       

    }
    async signup(credential){
        const registerdUser = await this.signupQuery(this.Model,credential,this.#hashWithPrivateKey);
        const cookie = await this.#makeCookie(registerdUser);
        return {
            user:{
                ...registerdUser
            },
            cookie
        }
    }   
    async forgetPassword(credential){
        const userFound = await this.forgetPasswordQuery(this.Model,credential,this.#hashWithPrivateKey);
        if(userFound){
            const session = await this.#makeCookie(userFound,72000000,"resetpassword_session");
            return session;
        }
        const e = new Error();
        e.code = "forget-password";
        throw e;
    }
    async resetPassword(credential){
        const sign = Cookie.getSign(credential.session);
        let resetedPasswordUser = await this.#db.get(sign);
        if(resetedPasswordUser){
            await this.#db.del(sign);
            resetedPasswordUser = JSON.parse(resetedPasswordUser);
            credential.id = resetedPasswordUser[0].id;
            resetedPasswordUser = await this.resetPasswordQuery(this.Model,credential,this.#hashWithPrivateKey);
            const cookie = await this.#makeCookie(resetedPasswordUser);
            return {
                user:{
                    ...resetedPasswordUser
                },
                cookie
            }
        }
        const e = new Error();
        e.code = "reset-password";
        throw e;
    }
}

module.exports = Auth;