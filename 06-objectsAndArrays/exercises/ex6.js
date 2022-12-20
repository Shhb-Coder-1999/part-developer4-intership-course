const arr1 = ['b', 'c'];
const arr2 = ['a', 'b', 'c', 'd'];
const arr3 = ['a', 'b', 'c', 'd','g' ,'f'];

function getUnion(...arr) {
    let TempArr = []
    arr.forEach(function(Eacharr) {
        const difference = TempArr.filter(
            element => !Eacharr.includes(element)
          );
        
          TempArr =  [...difference, ...Eacharr];
    });
  return TempArr

}

console.log(getUnion(arr1, arr2,arr3));  // [ 'a', 'b', 'c', 'd', 'g', 'f' ]
