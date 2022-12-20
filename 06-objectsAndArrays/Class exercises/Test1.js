 
const assign = function (obj1 , obj2){
    for(item in obj2){
        obj1[item] = obj2[item]
    }
} 
const joinObjs = function (obj1 , obj2){
    let obj3 ={}
    assign (obj3 , obj1)
    assign (obj3 , obj2)
    return obj3
}

console.log(joinObjs({title :"asdasdasd"},{artist:"asdad",duration:"sadasdasd"}))



