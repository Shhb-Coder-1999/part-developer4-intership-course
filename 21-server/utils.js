
const qs = require('querystring')
const parseQuery = require('my_query_string_parser')

function preparePages(items , presentPage , countPerEachPage) {
    var start= (Number(presentPage) * Number(countPerEachPage)) - Number(countPerEachPage) ;
    var end = start+ Number(countPerEachPage);
    listPage= items.slice(start, end);
    return listPage
}


async function getDataFromBody (req){

    let body = '';
    let result = {}
        let promise = new Promise((resolve, reject) => {
            req.on('data',(data)=>{
                body += data
            })

                req.on('end',()=>{
                let data = qs.parse(body);
                resolve({...data})
            })

            });

            result = promise
            return result
                     
}
    

function findUrl(items , url){
   
    Query = parseQuery(url)
    let res = []
    let page = 1
    let perPage = items.length
    
    ////////////////////////Remove pagination keys and init them ////////////////////
    if('page' in Query){
        page = Query['page']
        delete Query['page']
        perPage = Query['nperpage']
        delete Query['nperpage']
    }
 
    ////////////////////////Result without conditions ////////////////////
    
    if (Object.keys(Query).length === 0 || ('page' in Query && Object.keys(Query).length == 2) ){
        res  = preparePages(items , page , perPage)
        return res
    }
    else{

    ////////////////////////Result wit conditions ////////////////////
    items.forEach((element) => {
        
        let counter = 0
        for (let key1 in element) { 
           for (let key2 in Query){
            if (element[key1] == Query[key2] && key1 == key2 ) counter++
           }
            if(Object.keys(Query).length == counter) {
           res.push(element)
           break
        }
    }
      });
      res = preparePages(res , page , perPage)
      return res
    }


}


function modiStatistics (statistics , startDate , endDate , apiName , methodName){
    
    if(!(`${methodName}` in statistics[apiName])) { statistics[apiName][methodName] = {}}
    if(!('requestTime' in statistics[apiName][methodName])) statistics[apiName][methodName]['requestTime'] = new Array()
    
    let sum = 0
    let requestTime = statistics[apiName][methodName]['requestTime']
    let method = statistics[apiName][methodName]
 
    requestTime.push({startDate : startDate , endDate : endDate , duration : endDate - startDate})

    requestTime.forEach( (element) => { sum += element.duration });
    method['avgTime'] = sum /  requestTime.length
    method['totalTime'] = sum
    method['requestCount'] = requestTime.length

}



module.exports = {getDataFromBody , findUrl , modiStatistics}