function runProgram(input) {
    input = input.trim().split('\n')

    let size = +input[0]
    let arr = input[1].trim().split(' ').map(Number)
    let k = +input[2]
    let flag = false
    rec(0, 0)
    console.log(flag ? "yes" : "no")

    function rec(idx, val){
        if(val === k) flag = true
        if(idx === size) return false
        if(flag) return
        rec(idx+1, val + arr[idx])
        rec(idx+1, val)
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`3
    1 2 3
    5`);
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