function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1
    for(let i=0; i<tests; i++){
        let word1 = input[line++].trim()
        let word2 = input[line++].trim()

        let cache = new Array(word1.length).fill().map(el => new Array(word2.length).fill(Infinity))

        console.log(recur(0, 0))
        
        function recur(idx1, idx2){
            if(idx1 === word1.length){
                return word2.length - idx2
            }
            else if(idx2 === word2.length){
                return word1.length - idx1
            }
            if(cache[idx1][idx2] !== Infinity){
                return cache[idx1][idx2]
            }

            let a = Infinity
            if(word1[idx1] === word2[idx2]){
                a = recur(idx1 + 1, idx2 + 1)
            }

            let b = 1 + recur(idx1 + 1, idx2)
            let c = 1 + recur(idx1, idx2 + 1)
            let d = 1 + recur(idx1 + 1, idx2 + 1)

            return cache[idx1][idx2] = Math.min(a, b, c, d)
        }
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`3
    abcdef
    acb
    abde
    abcde
    abcde
    abxde
    `);
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