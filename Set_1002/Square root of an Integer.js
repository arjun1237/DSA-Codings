function runProgram(input) {
    input = input.trim().split('\n')
    let tests = +input[0]

    for(let i=1; i<=tests; i++){
        let num = +input[i]
        console.log(binary(num))
    }

}

function binary(num){
    let lo = 1, hi = num, ans = 1

    while(lo <= hi){
        let mid = Math.floor((hi + lo)/2)
        if(mid * mid === num){
            return mid
        }
        else if(mid * mid > num){
            hi = mid - 1
        }
        else if(mid * mid < num){
            ans = mid
            lo = mid + 1
        }
    }
    return ans
}

if (process.env.USER === "arjun1237") {
	runProgram(`2
4
15`);
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