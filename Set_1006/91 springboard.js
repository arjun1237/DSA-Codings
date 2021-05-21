function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1
    for(let i=0; i<tests; i++){
        let [h, w] = input[line++].trim().split(' ').map(Number)

        let mat = []
        for(let i=0; i<h; i++){
            mat.push(input[line++].trim().split(' ').map(Number))
        }

        let res = []
        let cache = new Array(h).fill().map(el => new Array(w).fill(-1))
        for(let i=0; i<w; i++){
            res.push(recur(0, i, 0))
        }

        console.log(Math.max(...res))

        function recur(row, col){
            if(row === h){
                return 0
            }
            if(cache[row][col] !== -1){
                return cache[row][col]
            }
    
            let b = 0, c = 0
            let a = mat[row][col] + recur(row + 1, col, mat[row][col])

            if(col + 1 < w){
                b = mat[row][col] + recur(row + 1, col + 1, mat[row][col])
            }
            if(col - 1 >= 0){
                c = mat[row][col] + recur(row + 1, col - 1, mat[row][col])
            }
            return cache[row][col] = Math.max(a, b, c)
        }
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`1
    6 5
    3 1 7 4 2
    2 1 3 1 1
    1 2 2 1 8
    2 2 1 5 3
    2 1 4 4 4
    5 2 7 5 1`);
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