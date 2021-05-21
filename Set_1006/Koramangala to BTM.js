function runProgram(input) {
    input = input.trim().split('\n')

    let n = +input[0]
    let arr = input[1].trim().split(' ').map(Number)

    
    let cache = new Array(n).fill(Infinity)
    console.log(recur(0))

    function recur(idx){
        if(idx === n-1){
            return 0
        }
        else if(idx >= n){
            return Infinity
        }
        if(arr[idx] === 0){
            return Infinity
        }
        if(cache[idx] !== Infinity){
            return cache[idx]
        }

        let transport = []
        for(let i=1; i<=arr[idx]; i++){
            transport.push(1 + recur(idx+i))
        }

        return cache[idx] = Math.min(...transport)
    }


}
if (process.env.USER === "arjun1237") {
	runProgram(`11
    1 3 5 8 9 2 6 7 6 8 9`);
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