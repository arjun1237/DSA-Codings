function runProgram(input) {
    input = input.trim().split('\n')

    let [n, m] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)

    let cache = new Array(m).fill().map(el => new Array(n + 1).fill(-Infinity))
    console.log(recur(0, 0))    

    function recur(i, val){
        if(i === m || val > n) return 0
        if(val === n) return 1
        if(cache[i][val] !== -Infinity) return cache[i][val]

        return cache[i][val] = recur(i, val + arr[i]) + recur(i + 1, val)
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`4 3
1 2 3`);
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