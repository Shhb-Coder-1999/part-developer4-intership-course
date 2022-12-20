const findSubString = function (string , sub ){
    let concatTwoString = string.concat(string);
    if (sub.length > string.length) return false
    else if (concatTwoString.includes(sub)) return true
    else return false
}

console.log(findSubString("Developer4" , "per")) //true
console.log(findSubString("Developer4" , "eve"))  //ture
console.log(findSubString("Developer4" , "4per"))  //false
console.log(findSubString("Developer4" , ""))     //true
console.log(findSubString("Developer4" , "Dpe")) //false