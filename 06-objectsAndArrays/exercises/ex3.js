let linkedList = require('./linkedList')

const PrintLL = function(linkedList) {
    let current = linkedList;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }


  PrintLL (linkedList)

    // 20
    // 95
    // test
    // true
    // {}
    // [ 1, 2, 3 ]
    // 20


///////////////////////////recursive function solution//////////////////////////////////////


//    function printReverse(head) {
    
//         if (head == null)
//             return;
//             console.log(head.value)
//         printReverse(head.next);
       
    
//     }
//     printReverse(linkedList)    



 // 20
    // 95
    // test
    // true
    // {}
    // [ 1, 2, 3 ]
    // 20