const { Pool } = require('pg');

const pool = new Pool({
    user: 'synergy',
    host: '192.168.5.121',
    database: 'college',
    password: '&6Tw3C0V4q@w',
    schema: 'synergy',
    port: 5432,
});

(async () => {
    const query = 'select * from categories';
    const res = await pool.query(query);
    console.log(res.rowCount);

    
    pool.end();
})();