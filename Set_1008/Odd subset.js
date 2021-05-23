function runProgram(input) {
    input = input.trim().split('\n')

    let size = +input[0]
    let arr = input[1].trim().split(' ').map(Number)

    let odds = arr.some(el => el % 2 !== 0)
    
    
    console.log(odds ? 2 ** (size-1) : 0)
}
if (process.env.USER === "arjun1237") {
	runProgram(`3
    1 2 3`);
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