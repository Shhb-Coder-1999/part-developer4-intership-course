const arrOfObj = [
    { "_id": "62f1459fe6700635a881", "index": 0, "balance": "$1,71.03", "age": 39, "name": "Stella Fitzpatrick" },
    { "_id": "62881", "index": 1, "balance": "$1,74.03", "age": 19, "name": "mina" },
    { "_id": "62f1ec02459fe67", "index": 2, "balance": "$1,71.03", "age": 29, "name": "Stella " },
]

const TempObject = {"balance": "$1,71.03123",  "name": "Shahab" }
const TempObject2 = { "_id": "62f1459fe6700635a881", "index": 0, "balance": "$1,71.03", "age": 29, "name": "ick"}

const Create = async function (objcet){
    try{
        const create = await new Promise((resolve,reject) =>{
            if ('name' in objcet && 'age' in objcet && 'balance' in objcet) {
            let id = Date.now();
            let index = arrOfObj.length;
            objcet['index']=index;
            objcet['_id']=`${id}`;
            arrOfObj.push(objcet);
            resolve(id);}
            else{
                reject('object donst include one of this keys : name , age , balance')  
                
            }
        });
          
        }catch(err){
            console.log(objcet)
            console.log(err);
        }
   
}

  const Read =  async function(id){
    try{
        const read = await new Promise((resolve,reject) =>{
           foundindex = arrOfObj.findIndex(object => { return object._id === id})
           if (foundindex != -1)  {
            resolve(arrOfObj[foundindex])
            console.log(arrOfObj[foundindex])
           }
           else reject('Cant find this user !') 
        });

        }catch(err){
            console.log(err);
        }
    
};

  const Update= async function(id,data){
    try{
        const update = await new Promise((resolve,reject) =>{
            foundindex = arrOfObj.findIndex(object => { return object._id === id})
            if (foundindex != -1 && 'name' in data && 'age' in data && 'balance' in data ) {
                arrOfObj[ foundindex] = data
                resolve(arrOfObj[foundindex]);
            } 
            else {
                reject('Cant find this user !') 
            }
        });

        }catch(err){
            console.log(err);
        }
    
};

  const Delete = async function(id){
    try{
        const del = await new Promise((resolve,reject) =>{
            foundindex = arrOfObj.findIndex(object => { return object._id === id})
            if (foundindex != -1) {
                let FoundObject = arrOfObj[foundindex]
                arrOfObj.splice(foundindex,1)
                resolve(arrOfObj[foundindex]);
            } 
            else {
                reject('Cant find this user !') 
            }
        });

        }catch(err){
            console.log(err);
        }
};

console.log(Create(TempObject))
console.log(Read('62f1459fe6700635a881'))
console.log(Update('62f1459fe6700635a881',TempObject2))
console.log(Delete('62f1459fe6700635a881'))
console.log(arrOfObj)


