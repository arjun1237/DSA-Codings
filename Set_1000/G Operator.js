function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    for(let i=1; i<=tests; i++){
        let num = +input[i]
        console.log(num % 2 === 0 ? num/2 : (num-1)/2)
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`3
    2
    11
    12`);
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