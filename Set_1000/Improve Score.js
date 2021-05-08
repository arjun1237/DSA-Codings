function runProgram(input) {
    input = input.trim().split('\n')
    let tests = +input[0]

    let line = 1
    for(let i=0; i<tests; i++){
        let [size, max] = input[line++].trim().split(' ').map(Number)
        let arr = input[line++].trim().split(' ').map(Number)

        let total = arr.reduce((a, c) => a + c, 0)
        console.log(total > max ? max : total)
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`2
    4 10
    1 2 3 78
    4 5
    1 2 3 4`);
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