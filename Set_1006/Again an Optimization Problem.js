function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1

    for(let i=0; i<tests; i++){
        let [s, n] = input[line++].trim().split(' ').map(Number)
        let artifs = []

        for(let j=0; j<n; j++){
            artifs.push(input[line++].trim().split(' ').map(Number))
        }

        let cache = new Array(n).fill().map(el => new Array(s+1).fill(-Infinity))

        console.log(recur(0, 0))

        function recur(idx, w){
            if(idx === n){
                return 0
            }
            if(cache[idx][w] !== -Infinity){
                return cache[idx][w]
            }
            
            let a = 0
            if(w + artifs[idx][0] <= s){
                a = artifs[idx][1] + recur(idx + 1, w + artifs[idx][0])
            }
            let b = recur(idx + 1, w)

            return cache[idx][w] = Math.max(a, b)
        }
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`1
    4 5
    1 8
    2 4
    3 0
    2 5
    2 3`);
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