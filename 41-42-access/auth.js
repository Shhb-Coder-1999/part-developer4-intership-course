const crypto = require("crypto");
const cookie = require("./cookie");
const users = require("./database/db");

class Auth {
  #user = null;
  #privateKey = "";
  #db;
  async checkLogin(req) {
    if (this.#user) {
      const originalUserSign = await this.#db.get(this.#user.sign);
      if (originalUserSign == cookie.getSign(req.headers["set-cookies"])) {
        return true;
      }
      this.#user = null;
    }
    return false;
  }
  getuser() {
    return this.#user;
  }
  constructor(privateKey, db) {
    this.#privateKey = privateKey;
    this.#db = db;
  }
  #hashWithPrivateKey(password) {
    const newPassword = password + this.#privateKey;
    const hash = crypto.createHash("sha256");
    return hash.update(newPassword).digest("base64");
  }

  async login(req, res) {
    const ident = req.params;
    const hashedpassword = this.#hashWithPrivateKey(ident.password);

    let detectedUser;
    for (const user of users) {
      if (user.user == ident.user) {
        detectedUser = user;
        break;
      }
    }

    if (detectedUser?.password == hashedpassword) {
      this.#user = detectedUser;
      const setcookie = cookie.createCookie({
        user: detectedUser.user,
        time: detectedUser.time,
      });

      res = cookie.setCookie(res, setcookie);
      return this.#user;
    }

    throw new Error("wrong Credential");
  }
  async signup(req, res) {
    const loggedIn = await this.checkLogin(req);
    if (loggedIn) throw new Error("redirect 300");

    const ident = req.params;
    const hashedpassword = this.#hashWithPrivateKey(ident.password);

    const time = Date.now();
    const setcookie = cookie.createCookie({
      user: ident.user,
      time,
    });

    res = cookie.setCookie(res, setcookie);

    const sign = cookie.getSign(setcookie);
    const token = cookie.getToken(setcookie);

    await this.#db.set(sign, token);
    const user = {
      user: ident.user,
      password: hashedpassword,
      time,
      sign,
      role: [],
    };

    users.push(user);
    this.#user = user;
    return this.#user;
  }
}

module.exports = Auth;
