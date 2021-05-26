// function abc(a, b){
//     console.log(a + b)
// }

// console.log(abc.length)

// let obj = {
//     1: "jh",
//     2: "oi"
// }

// for(let [key, val] in obj){
//     console.log(key, val)
// }

// var x = 100

// function abc(){
//     x = 90
//     // x = i = 10
// }

// abc()
// console.log(x)


// const a = 9

// if(true){
//     const a = 90
// }

// console.log(a)



// function display(i){
//     setTimeout(() => {
//         console.log(this[i], i)
//     }, i * 1000)
// }

// let arr = [1, 2, 3, 4]

// for(var i=0; i<arr.length; i++){
//     setTimeout(() => {
//         console.log(arr[    i], i)
//     }, i * 1000)
// }

// 'key, value, pair, javascript'

// let obj = {
//     key: {
//         value: {
//             pair: {
//                 javascript: {}
//             }
//         }
//     }
// }



// function recur(obj){

//     let a = ''
//     for(let key in obj){
//         let check = Object.keys(obj[key]).length === 0
//         a = a + key + (check ? "" : "," + recur(obj[key]))
//     }

//     return a
// }

// console.log(recur(obj))


// let str = 'key,value,pair,javascript'


// let keys = str.split(',')
// // function recur(keys){
// //     if(keys.length === 0){
// //         return {}
// //     }

// //     let key = keys.pop()

// //     return {[key] : recur(keys)}
// // }

// let obj = {}
// let curr = obj

// for(let i=0; i<keys.length; i++){
//     curr[keys[i]] = {}
//     curr = curr[keys[i]]
// }

// console.log(obj)




function debounce(cb, delay){
    let timer

    return function(){
        if(timer){
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            cb.apply(this, arguments)
        }, delay)
    }
}


function throttle(cb, wait){
    let time = Date.now()

    return function(){
        if((Date.now() - time) > wait){
            time = Date.now()
            cb.apply(this, arguments)
        }
    }
}




function deb(cb, delay){
    let debounce

    return function(){
        if(debounce){
            clearTimeout(debounce)
        }
        debounce = setTimeout(() => {
            cb.apply(this, arguments)
        }, delay)
    }
}

function throttle(cb, wait){
    let time = Date.now()

    return function(){
        if(Date.now() > time + wait){
            time = Date.now()
            cb.apply(this, arguments)
        }
    }
}


































































































