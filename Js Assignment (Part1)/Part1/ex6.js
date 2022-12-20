const fibonacci = n => {
    if (n <= 1) {
      return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

const OddOrEven = function (number){

if(number % 2 == 0) {
    return "even"
}

else {
    return "odd"
}
}  

const fun1 = function (){
    console.log("func1")
   }

const func2 = function (){
    console.log("func2")
   }  

const WhichFunc = function (fun1 , func2 , num){
    if (OddOrEven(fibonacci(num)) == "even") fun1()
    else func2()

}

WhichFunc(fun1 , func2 , 4)