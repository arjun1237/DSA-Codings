function runProgram(input) {

    let num = +input

    let cache = new Array(num + 1).fill(-1)
    console.log(fibo(num))
    
    function fibo(n){
        if(n == 0 || n == 1) return n
        if(cache[n] !== -1) return cache[n]

        return cache[n] = fibo(n-1) + fibo(n-2)
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`5`);
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