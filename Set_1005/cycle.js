
const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var hasCycle = function(head) {
    let curr = head
    let dbCurr = head

    while(dbCurr){
        curr = curr.next
        dbCurr = dbCurr.next
        if(!dbCurr){
            break
        }
        dbCurr = dbCurr.next
        if(curr === dbCurr) return true
    }

    return false
};

