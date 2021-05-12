function runProgram(input) {
    input = input.trim().split('\n')

    let size = +input[0]
    let num = input[1].trim()

    let zeroes = []
    let count = 0
    for(let char of num){
        if(char === '0'){
            if(zeroes.length === 0){
                zeroes.push(1)
            }
            else{
                zeroes.push(zeroes[zeroes.length-1] + 1)
            }
            count++
        }
        else{
            if(zeroes.length === 0){
                zeroes.push(0)
            }
            else{
                zeroes.push(zeroes[zeroes.length-1])
            }
        }
    }

    if(count === 0){
        console.log(0)
    }
    else{
        console.log(count - zeroes[count-1])
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`4
    101001`);
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