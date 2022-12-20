const msg = function (){
 console.log("Hello World")
}

const CallBack = function (msg , num){
 for(let i = 0 ; i < num ; i++){
    msg()
 }
}

CallBack(msg,1)