const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var isPalindrome = function (head) {
    let curr = head

    let arr = []
    while(curr){
        arr.push(curr.data)
        curr = curr.next
    }

    function checkPalin(){
        for(let i=0, j=arr.length-1; i<arr.length/2; i++, j--){
            if(arr[i] !== arr[j]) return false
        }

        return true
    }

    return checkPalin()
};
