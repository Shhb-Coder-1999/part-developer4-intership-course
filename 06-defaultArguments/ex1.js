
//   Destructured parameter with default value assignment  

function SetDefault({x = 10 } = {} , {y = undefined} = {y:10}) {
    console.log(x,y)
  }

  SetDefault() // 10  10
  SetDefault(undefined,undefined) // 10  10
  SetDefault({},undefined) // 10  10
  SetDefault({},{}) // 10  undefind
  SetDefault(undefined,{}) // 10  undefind
  SetDefault({ x:2 } , {y:3}) // 2  3

  