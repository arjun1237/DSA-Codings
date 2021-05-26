// let arr = [10,22,9,33,21,50,41,60,80] 


// let cache = new Array(arr.length).fill(1)
// function lis(){
//     for(let i=1; i<arr.length; i++){
//         for(let j= 0; j<i; j++){
//             if(arr[j] < arr[i] && cache[j] >= cache[i]){
//                 cache[i] = cache[j] + 1
//             }
//         }
//     }
// }
// lis()
// console.log(Math.max(...cache))

arr = [-1, 100, 4, -5]

function recur(i, j){
    if(i > j){
        return 0
    }

    let a = arr[i] + Math.min(recur(i+2, j), recur(i+1, j-1))
    let b = arr[j] + Math.min(recur(i, j-2), recur(i+1, j-1))
    return Math.max(a, b)
}

function recur2(i, j){
    if(i > j){
        return 0
    }

    let a = arr[i] + Math.min(recur(i+1, j), recur(i+2, j-1))
    let b = arr[j] + Math.min(recur(i, j-1), recur(i+2, j-1))
    return Math.max(a, b)
}

console.log(recur(0, arr.length-1) - recur2(0, arr.length-1))