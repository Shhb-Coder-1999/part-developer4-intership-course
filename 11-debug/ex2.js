
var a = {
    foo:(v)=>{a._b = v;}
}

console.log(a.foo(10))
console.log(a._b) // undefined


  /*
    in this case , in our object 'this' points to its parent , its parent is equal to global scope and
    global scope doesn't have any property of '_b' so it returns 'undefined'
    we should replace 'this' with a , it means we assign a._b with v
  */