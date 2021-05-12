function runProgram(input) {
    input = input.trim().split('\n')
    let n = +input[0]

    let powers = []
    let line = 1
    for(let i=0; i<n; i++){
        powers.push(+input[line++])
    }
    powers.sort((a, b) => a-b)

    let powers_after_kill = []
    powers.reduce((a, c) => {
        powers_after_kill.push(a + c)
        return a + c
    }, 0)

    let q = +input[line++]

    let rounds = []
    for(let i=0; i<q; i++){
        rounds.push(+input[line++])
    }

    for(let i=0; i<rounds.length; i++){
        let p = rounds[i]
        let j = 0
        while(powers[j] <= p){
            j++
        }
        j--
        console.log(j === -1 ? "0 0" : (j + 1) + " " + powers_after_kill[j])
    }

    // console.log(powers, powers_after_kill)
}
if (process.env.USER === "arjun1237") {
	runProgram(`7
    1 
    2 
    3 
    4 
    5 
    6 
    7
    3
    3
    10
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