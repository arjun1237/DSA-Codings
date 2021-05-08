function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let goals = new Map()
    for(let i=1; i<=tests; i++){
        let team = input[i].trim()
        if(goals.has(team)){
            let val = goals.get(team)
            goals.set(team, val + 1)
        }
        else{
            goals.set(team, 0)
        }
    }

    let max = 0
    let max_team = null
    
    for(let [key, val] of goals.entries()){
        if(val >= max){
            max = val
            max_team = key
        }
    }

    console.log(max_team)
}
if (process.env.USER === "arjun1237") {
	runProgram(`5
    A
    ABA
    ABA
    A
    A`);
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