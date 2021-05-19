function runProgram(input) {
    let [str1, str2] = input

    let cache = new Array(str1.length).fill().map(el => new Array(str2.length).fill(-1))
    console.log(rec(0, 0))

    function rec(idx1, idx2){
        if(idx1 === str1.length || idx2 === str2.length) return 0
        if(cache[idx1][idx2] !== -1) return cache[idx1][idx2]
        let a = 0
        if(str1[idx1] === str2[idx2]){
            a = 1 + rec(idx1 + 1, idx2 + 1)
        }
        let b = rec(idx1 + 1, idx2)
        let c = rec(idx1, idx2 + 1)

        return cache[idx1][idx2] = Math.max(a, b, c)
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(['AGGTAB', 'GXTXAYB']);
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