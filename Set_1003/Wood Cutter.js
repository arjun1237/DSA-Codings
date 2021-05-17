function runProgram(input) {
    input = input.trim().split('\n')

    let [n, k] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)

    console.log(binary())

    function binary(){
        let lo = 1, hi = 10 ** 9, ans = -1

        while(lo <= hi){
            let mid = lo + Math.floor((hi - lo)/2)
            if(predicate(mid)){
                ans = mid
                lo = mid + 1
            }
            else{
                hi = mid -1
            }
        }

        return ans
    }

    function predicate(mid){
        let total = 0
        for(let i=0; i<n; i++){
            if(arr[i] > mid){
                total += arr[i] - mid
            }
        }
        return total >= k
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`4 7
    20 20 20 20`);
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