function runProgram(input) {
    input = input.trim().split('\n')
    let tests = +input[0]

    let line = 1
    for(let i=0; i<tests; i++){
        let size = +input[line++]
        let arr = input[line++].trim().split(' ').map(Number)

        console.log(binary(arr))
    }
    
}

function binary(arr){
    let lo = 0, hi = arr.length-1, ans = -1

    while(lo <= hi){
        let mid = Math.floor(lo + (hi-lo)/2)
        if(arr[mid] === 1){
            hi = mid-1
            ans = mid
        }
        else{
            lo = mid+1
        }
    }

    return ans
}


if (process.env.USER === "arjun1237") {
	runProgram(`2
    4
    0 0 0 1 
    1
    1`);
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