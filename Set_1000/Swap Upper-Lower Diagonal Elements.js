function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1
    for(i=0; i<tests; i++){
        let size = +input[line++]
        let mat = []

        for(let j=0; j<size; j++){
            mat.push(input[line++].trim().split(' ').map(Number))
        }

        for(let j=0; j<size; j++){
            for(let k=0; k<size; k++){
                if(k > j){
                    [mat[j][k], mat[k][j]] = [mat[k][j], mat[j][k]];
                }
            }
        }

        for(let j=0; j<size; j++){
            console.log(mat[j].join(' '))
        }
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`2
    3
    1 2 3
    4 5 6
    7 8 9
    4
    2 3 5 6
    4 5 7 9
    8 6 4 9
    1 3 5 6`);
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