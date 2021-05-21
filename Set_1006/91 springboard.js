function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1
    for(let i=0; i<tests; i++){
        let [h, w] = input[line++].trim().split(' ').map(Number)

        let mat = []
        for(let i=0; i<h; i++){
            mat.push(input[line++].trim().split(' ').map(Number))
        }
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`Test case`);
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