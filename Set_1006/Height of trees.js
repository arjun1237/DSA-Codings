function runProgram(input) {
    input = input.trim().split('\n')

    let size = +input[0]
    let arr = input[1].trim().split(' ').map(Number)
    let dp = new Array(arr.length).fill(1)
    for(let i=1; i<arr.length; i++){
        for(let j = 0; j<i; j++){
            if(arr[j] < arr[i] && dp[j] >= dp[i]){
                dp[i] = dp[j] + 1
            }
        }
    }
    console.log(Math.max(...dp))
}
if (process.env.USER === "arjun1237") {
	runProgram(`9
    1 0 3 1 2 3 1 2 3 4 5 6`);
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