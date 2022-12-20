const { Pool } = require('pg')

class DB {
  #instance = null;
  constructor(config) {
    if (!this.#instance) {
      this.#instance = new Pool(
        // host: 'localhost',
        // user: 'database-user'
        config
      );
    }
    return this.#instance;
  }
}


module.exports = DB;