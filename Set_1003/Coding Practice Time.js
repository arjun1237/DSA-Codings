function runProgram(input) {
    input = input.trim().split('\n')

    let [n, k] = input[0].trim().split(' ').map(Number)
    let arr = input[1].trim().split(' ').map(Number)
    let max = Math.max(...arr)

    console.log(binary())

    function binary(){
        let lo = 1, hi = 10**14, ans = -1

        while(lo <= hi){
            let mid = lo + Math.floor((hi - lo) / 2)

            if(predicate(mid)){
                ans = mid
                hi = mid - 1
            }
            else{
                lo = mid + 1
            }
        }

        return ans
    }

    function predicate(mid){
        let l = 0
        for(let i=0; i<k; i++){
            let m = mid
            for(var j=l; j<n; j++, l++){
                let val = m - arr[j]
                if(val >= 0){
                    m = val
                }
                else{
                    break
                }
            }
            if(l === n){
                return true
            }
        }
        return false
    }

}
if (process.env.USER === "arjun1237") {
	runProgram(`5 3
    1 2 2 1 3`);
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