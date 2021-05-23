function runProgram(input) {
    input = input.trim().split('\n')

    let size = +input[0]
    let arr = input[1].trim().split(' ').map(Number)

    console.log(recur(0, size-1, false))

    function recur(i, j, pass){
        if(i > j){
            return 0
        }
        console.log(i, j)
        
        let a = pass ? recur(i + 1, j, !pass) : arr[i] + recur(i + 1, j, !pass)
        let b = pass ? recur(i, j - 1, !pass) : arr[i] + recur(i, j - 1, !pass)
        
        return Math.max(a, b)
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`4
    8 15 3 7
    `);
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