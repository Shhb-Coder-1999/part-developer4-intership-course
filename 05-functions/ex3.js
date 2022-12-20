const GetArr = function (...strings){
return strings
}

const longest = GetArr("masadads","ali","sadasdasdasd").reduce(
    function (a, b) {
        console.log(a)
        console.log(b)
        console.log("---------------------")

        return a.length > b.length ? a : b;
    }
);

console.log(longest)