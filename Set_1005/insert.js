
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

// Complete the function below

function insertNodeAtPosition(head, data, position) {
    let node = new LinkedListNode(data)

    let curr = head

    if(position === 0){
        node.next = head
        return node
    }

    position--

    while(position--){
        curr = curr.next
    }

    let temp = curr.next
    curr.next = node
    node.next = temp

    return head
}

