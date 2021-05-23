// Check the given number is power of 2 or not

function binary(num){
    let lo = 0; hi = num

    while(lo <= hi){
        let mid = lo + Math.floor((hi - lo) / 2)

        if(2 ** mid === num) return true

        if(2 ** mid > num){
            hi = mid - 1
        }
        else{
            lo = mid + 1
        }
    }

    return false
}

// console.log(binary(1))

// arr=[1,4,2,5,6,8], seperate odd and even numbers

function separate(){
    let arr=[2, 4, 6, 8, 3]
    let i = 0, j = arr.length-1

    while(i < j){
        while(arr[i] % 2 !== 0) i++
        while(arr[j] % 2 === 0) j--

        if(i < j){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }

    return arr.join(' ')
}

// console.log(separate())

// arr=[4, 5, -2, 1, 0] , o/p = [ 0, 0, 0, 0, -40]

left = [1, 1, 2, 6, 24]
right =[120, 60, 40, 30, 24] 

function abc(){
    let arr=[4, 5, -2, 1, 0]
    let lt = [], rt = ''
    let total = 1
    for(let i=0; i<arr.length; i++){
        if(arr[i-1] !== undefined){
            total *= arr[i-1]
        }
        lt.push(total)
    }

    total = 1
    for(let j=arr.length-1; j>=0; j--){
        if(arr[j+1] !== undefined){
            total *= arr[j+1]
        }
        rt = (lt[j] * total) + " " + rt
    }

    console.log(rt)
}

abc()
