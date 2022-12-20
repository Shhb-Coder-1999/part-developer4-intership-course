
let count 
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();


eventEmitter.once('eventCounter', ()=>{
    count  =  0 
});
eventEmitter.on('eventCounter', ()=>{
    count++
})


const router = {
    '/': (req, res) => {
        const {method } = req;
        const SelectMethod = {
        GET : ()=>{
            eventEmitter.emit('eventCounter')
            res.writeHead(200, { "Content-Type": "application/json" });
            res.write(JSON.stringify({count : count}));
            res.end(); 
              },
          }
        
        SelectMethod[method]()
    },

}


const requestHandler = (req, res) => {
    router['/'](req, res);  
};

module.exports = requestHandler;