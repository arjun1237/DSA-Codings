function runProgram(input) {
    input = input.trim().split('\n')
    let [n, k] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)

    let up = upper()
    let low = lower()
    let num = up - low

    console.log(up === -1 ? 0 : num + 1)

    function upper(){
        let lo = 0, hi = n-1, ans = -1

        while(lo <= hi){
            let mid = lo + Math.floor((hi - lo) / 2)
            if(arr[mid]  === k){
                ans = mid
            }
            if(arr[mid] <= k){
                lo = mid + 1
            }
            else{
                hi = mid - 1
            }
        }
        return ans
    }

    function lower(){
        let lo = 0, hi = n-1, ans = -1

        while(lo <= hi){
            let mid = lo + Math.floor((hi - lo) / 2)
            if(arr[mid]  === k){
                ans = mid
            }
            if(arr[mid] >= k){
                hi = mid - 1
            }
            else{
                lo = mid + 1
            }
        }
        return ans
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`6 2
2 3 3 3 3 4`);
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