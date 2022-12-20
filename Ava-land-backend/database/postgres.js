const {Pool} = require("pg");
const helper = require('./helper');

class Postgres {
    static #poolinstance;
    #query = '';
    #params = [];
    constructor(config){
        this.schema = config.schema;
        Postgres.#poolinstance = new Pool(config);
    }
    async insert(table,columns,values,returnFlg){
        const _columns = columns.join(',');
        this.#query = ` INSERT INTO ${this.schema}.${table}(${_columns}) VALUES(${helper.dollarSequence(values).join(',')}) `
        if(returnFlg)
        {
            this.#query += `RETURNING id,${_columns} `;
        }
        this.#query += `;`;
        const temp = this.#query ;
        this.#query = '';

        const result = await Postgres.#poolinstance.query(temp,values);
        return result.rows;
    }
    async insertMany(table,rows,returnFlg){
        this.#query = '';
        let values = [];
        const _columns = Object.keys(rows[0]).join(',');
        
        this.#query = ` INSERT INTO ${this.schema}.${table}(${_columns}) VALUES `
        for (const row of rows) {
            const _values = Object.values(row);
            this.#query += ` (${helper.questionMarkSequence(_values).join(',')}), `
            values = values.concat(_values);
        }
        this.#query = this.#query.slice(undefined,-2);
        if(returnFlg)
        {
            this.#query += `RETURNING id,${_columns} `;
        }
        this.#query += `;`;
        
        const dollars = helper.dollarSequence(values);
        dollars.forEach((dollar)=>{
            this.#query = this.#query.replace('?',dollar)
        })
        const temp = this.#query ;
        this.#query = '';

        const result = await Postgres.#poolinstance.query(temp,values);
        this.#query = ''
        return result.rows;
    }
    where(condition,params){
        this.#query += ` WHERE ${condition} `;
        this.#params=this.#params.concat(params);
        return this;

    }
    select(table,columns){
        this.#query += ` SELECT ${columns.join(',')} FROM ${this.schema}.${table} `;
        return this;
    }
    delete(table){
        this.#query += ` DELETE FROM ${this.schema}.${table} `;
        return this;
    }
    update(table,columns,values){
        this.#query = ` UPDATE ${this.schema}.${table} SET ${columns.join('=?,')}=?`;
        this.#params = this.#params.concat(values);
        return this;
    }
    manyToMany(table,relation,values){
        // const modelcolumns = [];
        const relatedcolumns = [`${this.schema}`+'.'+relation.relatedModel.table + '.' + 'id'];
        // this.model.columns.forEach((param)=>{
        //     modelcolumns.push(`${this.schema}`+'.'+this.model.table + '.' + param);
        // });

        relation.relatedModel.columns.forEach((param)=>{
            relatedcolumns.push(`${this.schema}`+'.'+relation.relatedModel.table + '.' + param);
        })

        this.#query += ` SELECT ${relatedcolumns.join(',')} FROM ${this.schema}.${table} INNER JOIN ${this.schema}.${relation.pivotTable} `+
            `ON ${this.schema}.${table}.${relation.identifire} = ${relation.pivotTable}.${relation.relatedIdentifire} AND ${this.schema}.${table}.${relation.identifire} = ? INNER JOIN ${this.schema}.${relation.relatedTable}`+ ` ON ${this.schema}.${relation.relatedTable}.${relation.referenceIdentifire} = ${this.schema}.${relation.pivotTable}.${relation.relatedreferenceIdentifire} `
        this.#params = this.#params.concat(values);
        return this;

    }
    hasMany(relation,values){
        const relatedcolumns = [];
        
        relation.relatedModel.columns.forEach((param)=>{
            relatedcolumns.push(`${this.schema}`+'.'+relation.relatedModel.table + '.' + param);
        })

        this.#query += ` SELECT ${relatedcolumns.join(',')} FROM ${this.schema}.${relation.relatedTable} LEFT JOIN ${this.schema}.${this.model.table} WHERE ${this.schema}.${relation.relatedTable}.${relation.referenceIdentifire} = ${relation.relatedreferenceIdentifire} AND ${this.schema}.${relation.relatedIdentifire} = ? ;`;

        this.#params = this.#params.concat(values);
        return this;
    }
    orderBy(key){
        this.#query += ` ORDER BY ${key}`
    }
    async execute(table,returnFlg=false){
        const dollars = helper.dollarSequence(this.#params);
        
        dollars.forEach((dollar)=>{
            this.#query = this.#query.replace('?',dollar)
        })

        
        if(returnFlg)
        {
          this.#query += ` RETURNING ${this.schema}.${table}.* `;
        }
        
        const temp = this.#query ;
        this.#query = '';

        const tempParams = this.#params ;
        this.#params = [];
        const result = await Postgres.#poolinstance.query(temp,tempParams);

        

        return result.rows;
    }
}


module.exports = Postgres;