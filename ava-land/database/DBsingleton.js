const {Pool} = require("pg");
class DB {
    static #poolinstance = null;
    constructor(config){
        if (DB.#poolinstance == null){
            DB.#poolinstance = new Pool(config);
        }
        return DB.#poolinstance;
    }
}


module.exports = DB;