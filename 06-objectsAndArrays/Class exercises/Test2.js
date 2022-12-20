const modi = function(obj){
    for(item in obj){ if (typeof(obj[item]) != 'number' ) delete obj[item] }
    const values = Object.values(obj);
    const max = Math.max(...values);
    const min = Math.min(...values);
    const average = values.reduce((a, b) => a + b,0) / values.length;
    return {"min":min , "max":max , "avg":average}
}

console.log(modi({erpers:23 , id:20 , asdsad:true , acxz:'asdasdas' , as:1}))