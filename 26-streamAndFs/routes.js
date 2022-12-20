var fs = require('fs');
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


eventEmitter.on('writeReqInfo', (req)=>{
    fs.appendFileSync('./File/logs.txt', JSON.stringify({method : req.method , url : req.url , date : new Date()}) + "\r\n", function (err) { 
                if (err)
        console.log(err);
                else
        console.log('Write operation complete.');
    });

})


const router = {


    '/logs': (req, res) => {
        const {method } = req;
        const SelectMethod = {
        GET : ()=>{
            let raedStream = fs.createReadStream('./File/logs.txt');
 
            //////////////////////routine/////////////////////

            // let data = ''
            // raedStream.on('data', (chunk)=>{
            //     data += chunk;
            // })

            // raedStream.on('end', ()=>{
            //     res.end(data)
            // })

            //////////////////////with pipe /////////////////////

            raedStream.pipe(res)
        
              },
          }
        
        SelectMethod[method]()
    },

    '404': (req , res) => {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify({ message: '404-not found' }));
        return res.end();
    }



}


const requestHandler = (req, res) => {
    const { url, method } = req;
    eventEmitter.emit('writeReqInfo' , req)
    try {
        router[url](req, res);  

    } catch (error) {
        
        router['404'](req, res);
    }
        

};

module.exports = requestHandler;