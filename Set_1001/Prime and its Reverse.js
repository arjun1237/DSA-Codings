function runProgram(input) {
    input = input.trim().split('\n')
    let tests = +input[0]

    for(let i=1; i<=tests; i++){
        let num = input[i].trim()
        let rev = +num.split('').reverse().join('')
        num = +num

        console.log(prime(num) && prime(rev) ? "Yes" : "No")
    }

}

function prime(num){
    if(num === 2){
        return true
    }
    if(num % 2 === 0 || num === 1) {
        return false
    }
    for(let i=3; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

if (process.env.USER === "arjun1237") {
	runProgram(`2
    2
    10`);
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