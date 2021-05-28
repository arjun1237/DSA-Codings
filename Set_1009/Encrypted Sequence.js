function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1
    for(let i=0; i<tests; i++){
        let size = +input[line++]
        let arr = input[line++].trim().split(' ').map(Number)

        let res = []
        for(let j=0, k=size-1; j<Math.ceil(size/2); j++, k--){
            res.push(arr[j])
            if((size % 2 !== 0 && Math.ceil(size/2)-1 !== k) || size % 2 === 0)
                res.push(arr[k])
        }
        console.log(res.join(' '))
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`2
    5
    1 3 5 4 2
    6
    1 3 5 6 4 2`);
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