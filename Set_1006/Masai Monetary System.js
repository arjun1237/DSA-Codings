function runProgram(input) {
    input = input.trim().split('\n')

    for(let i=0; i<input.length; i++){
        let num = +input[i]

		let cache = []
        console.log(recur(num))

		function recur(n){
			if(n < 4) return n
			if(cache[n] !== undefined) return cache[n]
			
			let val = Math.max(Math.floor(n/2), recur(Math.floor(n/2)))
					+ Math.max(Math.floor(n/3), recur(Math.floor(n/3))) 
					+ Math.max(Math.floor(n/4), recur(Math.floor(n/4)))
	
			return cache[n] = Math.max(val, n)
		}
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