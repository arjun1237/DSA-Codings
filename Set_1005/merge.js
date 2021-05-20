
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
    if(!l1){
        return l2
    }
    if(!l2){
        return l2
    }
    
    let res = null
    let head

    while(l1 && l2){
        if(l1.val < l2.val){
            let temp = l1.next
            l1.next = null
            if(res){
                res.next = l1
                res = res.next
            }
            else{
                res = l1
                head = res
            }
            l1 = temp
        }
        else{
            let temp = l2.next
            l2.next = null
            if(res){
                res.next = l2
                res = res.next
            }
            else{
                res = l2
                head = res
            }
            l2 = temp
        }
    }

    if(l1){
        res.next = l1
    }
    else{
        res.next = l2
    }

    return head

};

