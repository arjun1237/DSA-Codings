
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtTail(head, data) {
    let newNode = new LinkedListNode(data)
    if(!head){
        return newNode
    }
    let curr = head

    while(curr.next){
        curr = curr.next
    }

    curr.next = newNode

    return head
}

