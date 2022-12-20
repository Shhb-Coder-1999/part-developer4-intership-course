

const  { findUrl, getDataFromBody , modiStatistics }  = require('./utils')


const users = [
    { id: 1, name: 'ali1', age: 10 },
    { id: 2, name: 'ali2', age: 10 },
    { id: 3, name: 'ali3', age: 10 }
];
const products = [
    { id: 1, name: 'p1' },
    { id: 2, name: 'p2' },
    { id: 3, name: 'p3' }
];

const statistics = {
    '/404' : {},
    '/users'    : {},
    '/products'  : {},
    '/statistics'  : {}
}

const router = {
    '/users': (req, res) => {
        const { url, method } = req;
        const CRUD = {
        
        GET :  ()=>{
            try {
                let Data =  findUrl(users , url)
                if (Data.length == 0 ) throw new Error('404-not found') 
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(Data));

            } catch (error) {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: error.message }));
            }   
        },

        PUT : async ()=>{
                let getdata = await getDataFromBody(req)
                let updatedUser = {}
                users.forEach((element) => {
                    if(getdata.id == element.id){
                        getdata.id = Number(getdata.id)
                        Object.assign(element, getdata)
                        updatedUser = element
                    } 
                })
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(updatedUser));  
          },

        
        POST : async () => {
                let getdata = await getDataFromBody(req)
                getdata = {'id': Date.now(), ...getdata};
                users.push(getdata)
                console.log(users)
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(users));
            },
        
        DELETE:()=>{
            try {
                Data = findUrl(users , url)
                if (Data.length == 0 ) throw new Error('something wrong')
                else{   
                    res.setHeader('Content-Type', 'application/json');
                    res.write(JSON.stringify(Data));
                    users.splice(users.indexOf(Data[0]), 1);
                }
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: 'user Deleted' }));
            } catch (error) {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: error }));
            }

           
        },        
    
          }
        
        CRUD[method]()
        return res.end();
    },


    '/products': (req, res) => {
        const { url, method } = req;
        const CRUD = {
        
        GET : ()=>{
            try {
                let Data =  findUrl(products , url)
                if (Data.length == 0 ) throw new Error('404-not found') 
                res.writeHead(200, { "Content-Type": "application/json" });
                res.write(JSON.stringify(Data));

            } catch (error) {
                res.writeHead(404, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ message: error.message }));
            }         
        },

        PUT : async ()=>{
                let getdata = await getDataFromBody(req)
                let updatedProduct = {}
                products.forEach((element) => {
                    if(getdata.id == element.id){
                        getdata.id = Number(getdata.id)
                        Object.assign(element, getdata)
                        updatedProduct = element
                    } 
                })
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(updatedProduct));   
        },

        
        POST : async () => {
                let getdata = await getDataFromBody(req)
                getdata = {'id': Date.now(), ...getdata};
                products.push(getdata)
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify(products));  
            },
        
        DELEET:()=>{
                try {
                    Data = findUrl(products , url)
                    if (Data.length == 0 ) throw new Error('something wrong')
                    else{   
                        res.setHeader('Content-Type', 'application/json');
                        res.write(JSON.stringify(Data));
                        products.splice(products.indexOf(Data[0]), 1);
                    }
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ message: 'user Deleted' }));
                } catch (error) {
                    res.writeHead(404, { "Content-Type": "application/json" });
                    res.end(JSON.stringify({ message: error }));
                }
            },        
    
    }
        
        CRUD[method]()
        return res.end();
    },

    '/statistics': (req, res) => {
        const { method } = req;
        const CRUD = {
        
        GET : ()=>{
            res.setHeader('Content-Type', 'application/json');
            res.write(JSON.stringify(statistics));
            },
        }
        CRUD[method]()
        return res.end();

    },


    '404': (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({ message: '404-not found' }));
        return res.end();
    }
}


const requestHandler = (req, res) => {
    const { url, method } = req;
    const tempUrl = url.split("?");
  
    try {
        let start = new Date()
        if (tempUrl[0] in router) {
            router[tempUrl[0]](req, res);
        }
        else throw new Error()
        let end = new Date()
        modiStatistics(statistics, start , end , tempUrl[0] , method )

    } catch (error) {
        let start = new Date()
        router['404'](req, res);
        let end = new Date()
        modiStatistics(statistics, start , end , '/404' , 'GET' )
        
    }
    
    
};





module.exports = requestHandler;