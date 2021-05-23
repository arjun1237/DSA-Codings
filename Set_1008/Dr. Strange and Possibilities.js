function runProgram(input) {
    let num = +input

    recur([], 1)
    
    function recur(combo, idx){
        console.log(combo.join(' '))
        if(idx > num){
            return
        }

        for(let i=idx; i<=num; i++){
            recur([...combo, i], i+1)
        }
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`3`);
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