
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
}

// Complete the function below

function reverse(head) {
    let curr = head

    let prev = null
    
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    
    return prev
}

