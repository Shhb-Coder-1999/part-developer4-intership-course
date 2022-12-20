function isObject({ x = false } = {}) {
    if ( x != false) console.log(true)
    else console.log(false)
  }


  isObject({ x: 2 }) // true 
  isObject(undefined) // false 
  isObject([1,2,3]) // false 
  isObject('shahab') // false 
  isObject() // false
  isObject(()=>{}) // false  
  