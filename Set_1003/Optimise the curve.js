function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    for(let i=1; i<=tests; i++){
        let [a, b, c, k] = input[i].trim().split(' ').map(Number)
        if(c > k){
            console.log(-1)
        }
        else{
            console.log(binary(a, b, c, k))
        }
    }


    function binary(a, b, c, k){
        let lo = 0, hi = 10**9, ans = -1
        while(lo <= hi){
            let mid = lo + Math.floor((hi - lo) / 2)
            // console.log(predicate(a, b, c, k, mid), ((a * (mid ** 2)) + (b * mid) + c))
            if(predicate(a, b, c, k, mid)){
                ans = mid
                hi = mid - 1
            }
            else{
                lo = mid + 1
            }
        }
        return ans
    }

    function predicate(a, b, c, k, mid){
        return ((a * (mid ** 2)) + (b * mid) + c) >= k
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`1
    9 79 36 1`);
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