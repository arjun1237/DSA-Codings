function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1
    for(let i=0; i<tests; i++){
        let size = +input[line++]
        let tech = input[line++].trim().split(' ').map(Number)
        let price = input[line++].trim().split(' ').map(Number)
        let index = new Array(size).fill().map((el, i) => i)

        sortIndex(tech, index, 0, size-1)
        let newPrice = []
        
        for(let j=0; j<size; j++){
            newPrice.push(price[index[j]])
        }

        let flag = false
        for(let j=1; j<size; j++){
            if(newPrice[j-1] < newPrice[j] && tech[j-1] > tech[j]){
                flag = true
                break
            }
        }

        console.log(flag ? "Suresh Wins" : "Mukesh Wins")
    }
}

function sortIndex(tech, index, lo, hi){
    let mid = Math.floor((lo + hi)/2)
    if(lo < hi){
        sortIndex(tech, index, lo, mid)
        sortIndex(tech, index, mid+1, hi)
        merge(tech, index, lo, mid, hi)
    }
}

function merge(tech, index, lo, mid, hi){
    let arr1 = tech.slice(lo, mid+1)
    let arr2 = tech.slice(mid+1, hi+1)

    let index1 = index.slice(lo, mid+1)
    let index2 = index.slice(mid+1, hi+1)


    let temp = []
    let ind_temp = []

    let i = 0, j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] >= arr2[j]){
            temp.push(arr1[i])
            ind_temp.push(index1[i++])
        }
        else{
            temp.push(arr2[j])
            ind_temp.push(index2[j++])
        }
    }

    if(i === arr1.length){
        while(j < arr2.length){
            temp.push(arr2[j])
            ind_temp.push(index2[j++])
        }
    }
    else{
        while(i < arr1.length){
            temp.push(arr1[i])
            ind_temp.push(index1[i++])
        }
    }

    let k=0;
    while(k < temp.length){
        tech[lo] = temp[k]
        index[lo++] = ind_temp[k++]
    }
}



if (process.env.USER === "arjun1237") {
	runProgram(`3
    2
    4 3
    3 5
    4
    5 5 4 3
    5 3 3 3
    2
    3 3
    1 3`);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);``
	});
}