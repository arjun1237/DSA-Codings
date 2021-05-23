function runProgram(input) {
    input = input.trim().split('\n')

    let [n, k] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)

    function findMid(){
        let lo = 0, hi = n-1

        while(lo <= hi){
            let mid = lo + Math.floor((hi - lo) / 2)
            if(arr[mid] === k) return mid
            if(arr[mid] > k){
                if(arr[lo] > k){
                    lo = mid + 1
                }
                else{
                    hi = mid - 1
                }
            }
            else{
                if(arr[hi] < k){
                    
                }
            }
        }
    }


}
if (process.env.USER === "arjun1237") {
	runProgram(`5 1
    3 4 5 1 2`);
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