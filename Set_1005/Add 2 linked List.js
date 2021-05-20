
// const ListNode = class {
//     constructor(nodeData) {
//         this.val = nodeData;
//         this.next = null;
//     }
// };

// // Complete the function below

// var addTwoNumbers = function (l1, l2) {
    
//     let res = new ListNode()
//     let head = res
//     let carry = 0

//     while(l1 || l2){
//         let val1 = 0, val2 = 0
//         if(l1){
//             val1 = l1.val
//         }
//         if(l2){
//             val2 = l2.val
//         }

//         let add = val1 + val2 + carry

//         if(add >= 10){
//             add = add % 10
//             carry = 1
//         }
//         else{
//             carry = 0
//         }

//         res.next = new ListNode(add + res)
//         res = res.next

//         if(l1){
//             l1 = l1.next
//         }
//         if(l2){
//             l2 = l2.next
//         }
//     }

//     if(carry === 1){
//         res = 1 + res
//     }

//     return head.next

// };

// function abc(){
//     var name = "mm"
//     console.log(this.name)
// }

// let arr = [{name: "gg"}, {name: "kk"}]

// for(let i=0; i<arr.length; i++){

//     setTimeout(abc.call(arr[i]), 0)
//     setTimeout(abc, 0)
// }


for(var i=0; i<=5; i++){
    setTimeout(() => {
        console.log(i)
    }, i * 1000)
}