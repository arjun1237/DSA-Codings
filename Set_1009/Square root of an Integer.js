function runProgram(input) {
    input = input.trim().split('\n')

    let cases = +input[0]

    for(let i=1; i<=cases; i++){
        let num = +input[i]

        console.log(binary(num))
    }

    function binary(n){
        let lo = 0, hi = n, ans = 1;
        
        while(lo <= hi){
            let mid = lo + Math.floor((hi - lo) / 2)
            if(mid * mid === n) return mid
            if(mid * mid > n){
                hi = mid - 1
            }
            else{
                ans = mid
                lo = mid + 1
            }
        }
        return ans
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`2
    1
    9`);
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