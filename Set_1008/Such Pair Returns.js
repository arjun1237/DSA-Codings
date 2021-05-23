function runProgram(input) {
    input = input.trim().split('\n')

    let tests = +input[0]

    let line = 1
    for(let i=0; i<tests; i++){
        let [n, k] = input[line++].trim().split(' ').map(Number)
        let arr = input[line++].trim().split(' ').map(Number)
        
        let nums = {}
        for(let el of arr){
            if(el in nums) nums[el]++
            else nums[el] = 1
        }
        
        let flag = false
        for(let i=0; i<arr.length; i++){
            let diff = k - arr[i]
            if(arr[i] === diff && diff in nums && nums[diff] >= 2){
                flag = true
                break
            }
            else if(diff in nums && arr[i] !== diff){
                flag = true
                break
            }
        }

        console.log(flag ? "1" : "-1")
    }
}
if (process.env.USER === "arjun1237") {
	runProgram(`1
    5 5
    2 5 3 5 5`);
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