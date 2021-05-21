function runProgram(input) {
    let num = +input

    let cache = new Array(num).fill(-1)
    console.log(recur(0))

    function recur(n){
        if(n === num){
            return 1
        }
        if(n > num){
            return 0
        }
        if(cache[n] !== -1){
            return cache[n]
        }

        return cache[n] = recur(n + 1) + recur(n + 2) + recur(n + 3)
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`32`);
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