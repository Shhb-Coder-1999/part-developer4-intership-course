function recursive (x){
    if (x<0) return 0;
    return doSomthing(x+1) + recursive (x-1)- doSomthing(x)
}




function doSomthing(x){
     return x*2
}

console.log(recursive (1)) //4
console.log(recursive (2)) //6
console.log(recursive (3)) //8


function non_recursive (x){
    if (x<0) return 0;
    let result = 0;
    for (let i = 0; i <= x; i++) {
    result = doSomthing(i+1) + result - doSomthing(i);
    } 
    return result
}


console.log(non_recursive (1)) //4
console.log(non_recursive (2)) //6
console.log(non_recursive (3)) //8




