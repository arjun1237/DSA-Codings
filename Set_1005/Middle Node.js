const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var middleNode = function(head) {
    let curr = head
    let dbCurr = head
    
    while(dbCurr){
        dbCurr = dbCurr.next
        if(!dbCurr){
            return curr
        }
        dbCurr = dbCurr.next
        if(!dbCurr){
            return curr
        }
        curr = curr.next
    }

    return curr
    
};

