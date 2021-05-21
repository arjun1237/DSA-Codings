function runProgram(input) {
    let [word1, word2] = input.trim().split('\n').map(el => el.trim())

    let cache = new Array(word1.length).fill().map(el => new Array(word2.length).fill(-1))
    console.log(recur(0, 0))

    function recur(i, j){
        if(i === word1.length) return 0
        if(j === word2.length) return 0
        if(cache[i][j] !== -1){
            return cache[i][j]
        }

        let a = -1
        if(word1[i] === word2[j]){
            a = 1 + recur(i+1, j+1)
        }

        let b = recur(i, j+1)
        let c = recur(i+1, j)

        return cache[i][j] = Math.max(a, b, c)
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`AEDFHR
    ABCDGH`);
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