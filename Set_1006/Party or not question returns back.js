function runProgram(input) {
    input = input.trim().split('\n')

    let [n, r] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)
    let cache = false
    recur(0, 0, [])
    console.log(cache ? "Party" : "No Party")

    function recur(idx, val, combo){
        if(cache || val === r) {
            cache = true
            return
        }
        if(idx === n || val > r) return
        
        recur(idx + 1, val + arr[idx], [...combo, arr[idx]])
        recur(idx + 1, val, combo)
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`6 9
    3 34 4 12 5 2`);
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