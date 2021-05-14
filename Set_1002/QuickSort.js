function runProgram(input) {
    let arr = input.trim().split(' ').map(Number)
    qSort(arr, 0, arr.length-1)
    console.log(arr.join(' '))
}

function qSort(arr, lo, hi){
    if(lo < hi){
        let index = partition(arr, lo, hi)
        qSort(arr, lo, index-1)
        qSort(arr, index+1, hi)
    }
}

function partition(arr, lo, hi){
    let i = lo, j = hi, pivot = arr[hi]
    while(i < j){
        while(arr[j] >= pivot && j > lo){
            j--
        }
        while(arr[i] < pivot && i < hi){
            i++
        }
        if(i < j){
            swap(arr, i, j)
        }
    }
    swap(arr, hi, i)
    return i
}

function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


if (process.env.USER === "arjun1237") {
	runProgram(`16 11 5 18 22 7 4 9`);
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
		process.exit(0);
	});
}