function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1
    for(let i=0; i<tests; i++){
        let seatsArr = []
        let [seats, ppl] = input[line++].trim().split(' ').map(Number)

        for(let j=0; j<seats; j++){
            seatsArr.push(+input[+line++])
        }
        seatsArr.sort((a, b) => a-b)

        // console.log(binary(seatsArr, ppl))
        console.log(predicate(seatsArr, ppl, 4))

    }

    function binary(seatsArr, ppl){
        let lo = 1, hi = 10**9, ans = -1

        while(lo <= hi){
            let mid = lo + Math.floor((hi - lo) / 2)

            if(predicate(seatsArr, ppl, mid)){
                ans = mid
                lo = mid + 1
            }
            else{
                hi = mid - 1
            }
        }
        return ans
    }

    function predicate(arr, ppl, mid){
        let i = 0
        let val = arr[i++]
        ppl--
        while(true){
            
        }
    }
}

if (process.env.USER === "arjun1237") {
	runProgram(`1
    5 3
    1
    2
    8
    4
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