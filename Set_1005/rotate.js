
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var rotateRight = function(head, k) {
    if(!head || !head.next){
        return head
    }
    let curr = head
    let back = head
    while(curr.next){
        if(k === 0){
            back = back.next
            if(!back){
                back = head
            }
        }
        else{
            k--
        }
        curr = curr.next
        if(!curr.next && k > 0){
            curr = head
            k--
        }
    }

    curr.next = head
    head = back.next
    back.next = null

    return head
};

