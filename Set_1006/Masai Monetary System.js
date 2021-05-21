function runProgram(input) {
    input = input.trim().split('\n')

    for(let i=0; i<input.length; i++){
        let n = +input[i]

        console.log(recur(n))
    }

    function recur(n){
        if(n < 4) return n
        
        let val = Math.floor(n/2) + Math.floor(n/3) + Math.floor(n/4)

        return Math.max(val, recur(val))
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`45
    2`);
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