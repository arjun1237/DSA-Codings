function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    for(let i=1; i<=tests; i++){
        let str = input[i].trim().split('')

        let char = str[str.length-1]

        let count = 1
        while(str.length){
            if(str[str.length-1] !== char){
                count++
                char = str[str.length-1]
                str.pop()
            }
            else{
                str.pop()
            }
        }

        console.log(count)
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`2
    rllrnwizdhjjdguq
    abbbaaz`);
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