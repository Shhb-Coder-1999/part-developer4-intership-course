const linkedList = require('./linkedList')

function printReverse(head) {
    
    if (head == null)
        return;
    printReverse(head.next);
    console.log(head.value)

}
printReverse(linkedList)